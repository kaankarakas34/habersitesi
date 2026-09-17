export const ADMIN_COOKIE_NAME = 'admin_session';

export const getAdminCredentials = () => {
  return {
    username: process.env.ADMIN_USERNAME || 'admin',
    password: process.env.ADMIN_PASSWORD || 'Radar2026!Editor',
  };
};

const SECRET_KEY = process.env.ADMIN_SECRET_KEY || 'saglik-turizmi-radari-editor-secret-2026';

// Basit ve guvenli hash/token olusturucu (Edge & Node uyumlu Web Crypto)
async function getHmacKey(): Promise<CryptoKey> {
  const encoder = new TextEncoder();
  return crypto.subtle.importKey(
    'raw',
    encoder.encode(SECRET_KEY),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign', 'verify']
  );
}

function base64UrlEncode(buffer: Uint8Array): string {
  let binary = '';
  for (let i = 0; i < buffer.byteLength; i++) {
    binary += String.fromCharCode(buffer[i]);
  }
  return btoa(binary).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

function base64UrlDecode(str: string): Uint8Array {
  let base64 = str.replace(/-/g, '+').replace(/_/g, '/');
  while (base64.length % 4) {
    base64 += '=';
  }
  const binary = atob(base64);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) {
    bytes[i] = binary.charCodeAt(i);
  }
  return bytes;
}

export async function createSessionToken(username: string): Promise<string> {
  const payload = JSON.stringify({
    username,
    role: 'editor_admin',
    exp: Date.now() + 7 * 24 * 60 * 60 * 1000, // 7 gun gecerli
  });
  
  const encoder = new TextEncoder();
  const key = await getHmacKey();
  const signatureBuffer = await crypto.subtle.sign('HMAC', key, encoder.encode(payload));
  const signature = base64UrlEncode(new Uint8Array(signatureBuffer));
  const payloadBase64 = base64UrlEncode(encoder.encode(payload));

  return `${payloadBase64}.${signature}`;
}

export async function verifySessionToken(token: string | undefined | null): Promise<boolean> {
  if (!token || typeof token !== 'string') return false;

  const parts = token.split('.');
  if (parts.length !== 2) return false;

  const [payloadBase64, signature] = parts;

  try {
    const key = await getHmacKey();
    const encoder = new TextEncoder();
    const signatureBytes = base64UrlDecode(signature);
    const isValid = await crypto.subtle.verify(
      'HMAC',
      key,
      signatureBytes as any,
      encoder.encode(payloadBase64)
    );

    if (!isValid) return false;

    const payloadBytes = base64UrlDecode(payloadBase64);
    const payloadJson = new TextDecoder().decode(payloadBytes);
    const payload = JSON.parse(payloadJson);

    if (payload.exp && Date.now() > payload.exp) {
      return false;
    }

    return true;
  } catch {
    return false;
  }
}
