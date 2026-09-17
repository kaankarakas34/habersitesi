import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

function PolicyPage({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="py-10 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="pb-6 mb-8 border-b-2 border-[#102A43]">
          <span className="text-xs font-bold text-[#00A6A6] uppercase tracking-wider block mb-2">
            Yayın İlkeleri
          </span>
          <h1 className="text-3xl font-black text-[#102A43] tracking-tight">{title}</h1>
          {subtitle && <p className="text-sm text-[#5B6B79] mt-2">{subtitle}</p>}
        </div>
        <div className="prose-editorial">{children}</div>
      </div>
    </div>
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const titles: Record<string, string> = {
    'yayin-ilkeleri': 'Yayın İlkeleri',
    'editorial-bagimsizlik': 'Editoryal Bağımsızlık',
    'kaynak-ve-dogrulama': 'Kaynak ve Doğrulama Politikası',
    'duzeltme-politikasi': 'Düzeltme Politikası',
    'sponsorlu-icerik': 'Sponsorlu İçerik Politikası',
    kunye: 'Künye',
    iletisim: 'İletişim',
    'gizlilik-politikasi': 'Gizlilik Politikası',
    'cerez-politikasi': 'Çerez Politikası',
    'kullanim-kosullari': 'Kullanım Koşulları',
    kvkk: 'KVKK Aydınlatma Metni',
  };

  return {
    title: `${titles[slug] || 'Sayfa'} — Sağlık Turizmi Radarı`,
    description: 'Sağlık Turizmi Radarı yayın, gizlilik ve editoryal politikaları.',
  };
}

export default async function PolicyDynamicPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const content: Record<
    string,
    { title: string; subtitle?: string; body: React.ReactNode }
  > = {
    'yayin-ilkeleri': {
      title: 'Yayın İlkeleri',
      subtitle: 'Doğruluk, şeffaflık ve editoryal dürüstlük.',
      body: (
        <div className="space-y-5 text-sm text-[#17212B] leading-relaxed">
          <p>
            Sağlık Turizmi Radarı, aşağıdaki temel editoryal ilkeler çerçevesinde faaliyet gösterir.
          </p>
          <ul className="space-y-2 pl-5 list-disc marker:text-[#00A6A6]">
            <li>Başka yayınlardan haber kopyalamaz; yeniden yazım yaparken kaynak açıkça gösterilir.</li>
            <li>Her haberde ilk kaynak veya güvenilir birincil kaynak belirtilir.</li>
            <li>Mevzuatta Resmî Gazete, bakanlıklar, USHAŞ ve HealthTürkiye esas alınır.</li>
            <li>Doğrulanmayan iddialar kesin gerçek gibi sunulmaz.</li>
            <li>Yapay zekâ tarafından uydurulmuş alıntı, kişi, şirket, tarih veya istatistik kullanılmaz.</li>
            <li>İstatistiklerde kaynak, dönem ve kapsam belirtilir.</li>
            <li>Tıbbi tedavi önerisi verilmez; sağlık iddialarında uygun uyarı kullanılır.</li>
            <li>Ticari içerikler <em>"Sponsorlu İçerik"</em>, <em>"İş Birliği"</em> veya <em>"Basın Bülteni"</em> olarak etiketlenir.</li>
          </ul>
          <h2>İçerik İmzaları</h2>
          <p>
            Gerçek bir yazar yoksa içerik <em>"Sağlık Turizmi Radarı Editoryal"</em> imzasıyla yayımlanır. Sahte insan yazar profili oluşturulmaz.
          </p>
        </div>
      ),
    },
    'editorial-bagimsizlik': {
      title: 'Editoryal Bağımsızlık',
      body: (
        <div className="space-y-4 text-sm text-[#17212B] leading-relaxed">
          <p>
            Sağlık Turizmi Radarı, içeriklerinin oluşturulmasında herhangi bir reklam verenin, sponsorun ya da ticari ortağın editoryal müdahalesine izin vermez.
          </p>
          <p>
            Overseas Marketing ile olan ticari bağlantı, siteyi desteklemektedir; ancak haber seçimi, çerçeveleme ve kaynaklandırma süreçlerini etkilemez. Overseas Marketing içeriklerine yapılan tüm bağlantılar bağlamsal, editoryal olarak gerekçeli ve sınırlıdır.
          </p>
          <p>
            Tüm sponsorlu veya destekli çalışmalar <em>"Sponsorlu"</em>, <em>"İş Birliği"</em> veya <em>"Araştırma Desteği"</em> etiketiyle açıkça işaretlenir.
          </p>
        </div>
      ),
    },
    'kaynak-ve-dogrulama': {
      title: 'Kaynak ve Doğrulama Politikası',
      body: (
        <div className="space-y-4 text-sm text-[#17212B] leading-relaxed">
          <p>
            Yayınlanan tüm haber, analiz ve araştırma içeriklerinde birincil kaynak ilkesi benimsenir. Kaynak hiyerarşisi şu sıradadır:
          </p>
          <ol className="pl-5 list-decimal space-y-1 marker:text-[#102A43] font-medium">
            <li>Resmî Gazete, bakanlık tebliği veya kamu açıklaması</li>
            <li>USHAŞ, TÜİK, WHO, OECD gibi akredite kurum verileri</li>
            <li>Akademik hakemli dergiler</li>
            <li>Uluslararası sağlık ve seyahat sektörü yayınları</li>
            <li>Doğrudan sektör yetkilisiyle yapılan röportajlar</li>
          </ol>
          <p>
            Kaynaksız veya yalnızca yapay zekâ çıktısına dayanan iddialar yayımlanmaz. Araştırma içeriklerinde metodoloji ve örneklem mutlaka belirtilir.
          </p>
        </div>
      ),
    },
    'duzeltme-politikasi': {
      title: 'Düzeltme Politikası',
      body: (
        <div className="space-y-4 text-sm text-[#17212B] leading-relaxed">
          <p>
            Yayımlanmış bir içerikte hata saptanması durumunda, hata tipi ve kapsamına göre aşağıdaki süreç uygulanır:
          </p>
          <ul className="pl-5 list-disc space-y-1 marker:text-[#C62828]">
            <li><strong>Küçük yazım ve imla düzeltmeleri</strong> — not eklenmeksizin gizlice düzeltilmez; makale altında <em>"Düzeltme: [tarih]"</em> ile işaretlenir.</li>
            <li><strong>Olgusal hatalar</strong> — ilgili paragraf güncellenir ve sayfanın üst kısmında <em>"Güncelleme Notu"</em> eklenir.</li>
            <li><strong>Ciddi doğrulama hataları</strong> — içerik geçici olarak geri çekilir, inceleme yapılır ve bulgular kamuoyuyla paylaşılır.</li>
          </ul>
          <p>
            Okuyucular hata bildirimlerini{' '}
            <Link href="mailto:duzeltme@saglikturizmiradari.com" className="text-[#00A6A6] underline">
              duzeltme@saglikturizmiradari.com
            </Link>{' '}
            adresine iletebilir veya her haber sayfasındaki <em>"Düzeltme Bildir"</em> bağlantısını kullanabilir.
          </p>
        </div>
      ),
    },
    'sponsorlu-icerik': {
      title: 'Sponsorlu İçerik Politikası',
      body: (
        <div className="space-y-4 text-sm text-[#17212B] leading-relaxed">
          <p>
            Sağlık Turizmi Radarı, ticari iş birlikleri kapsamında aşağıdaki içerik formatlarını sunar:
          </p>
          <ul className="pl-5 list-disc space-y-1 marker:text-[#00A6A6]">
            <li>Sponsorlu dosya ve tematik özel sayılar</li>
            <li>Sponsorlu röportajlar (editoryal röportajlardan ayrı etiket ile)</li>
            <li>Bülten ve etkinlik sponsorlukları</li>
            <li>Sektörel banner ve duyuru alanları</li>
            <li>Araştırma desteği (metodoloji bağımsızdır; sponsor açıkça belirtilir)</li>
          </ul>
          <p>
            Tüm ticari içerikler <strong>"Sponsorlu İçerik"</strong>, <strong>"İş Birliği"</strong> veya <strong>"Reklam"</strong> etiketi taşır. Ücretli bağlantılarda ilgili işaretleme uygulanır. Reklam içerikleri, organik editoryal içeriklerle aynı görünümde sunulmaz.
          </p>
        </div>
      ),
    },
    kunye: {
      title: 'Künye',
      subtitle: 'Sağlık Turizmi Radarı Yayın Bilgileri',
      body: (
        <div className="space-y-4 text-sm text-[#17212B] leading-relaxed">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { label: 'Yayın Adı', value: 'Sağlık Turizmi Radarı' },
              { label: 'Yayın Türü', value: 'Dijital B2B Sektörel Haber Platformu' },
              { label: 'Yayın Dili', value: 'Türkçe (Birincil) / İngilizce (Planlanan)' },
              { label: 'Ticari Bağlantı', value: 'Overseas Marketing (Açık Beyan)' },
              { label: 'Yayın Merkezi', value: 'Türkiye' },
              { label: 'İletişim', value: 'iletisim@saglikturizmiradari.com' },
            ].map((item) => (
              <div key={item.label} className="bg-[#F5F7F9] p-3 rounded border border-[#DDE3E8]">
                <span className="text-[11px] text-[#5B6B79] font-bold uppercase block">{item.label}</span>
                <span className="font-semibold text-[#102A43]">{item.value}</span>
              </div>
            ))}
          </div>
          <p className="text-xs text-[#5B6B79] italic mt-4">
            * Bu sayfadaki künyede yer alan bilgiler tamamlandıkça güncellenecektir. Kişisel veya kurumsal bilgiler doğrulanmadan önceden doldurulmamıştır.
          </p>
        </div>
      ),
    },
    iletisim: {
      title: 'İletişim',
      body: (
        <div className="space-y-6 text-sm text-[#17212B] leading-relaxed">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { label: 'Editöryal & Haber', email: 'editor@saglikturizmiradari.com' },
              { label: 'Yazar Başvuruları', email: 'yazar@saglikturizmiradari.com' },
              { label: 'Sponsorluk & İş Birlikleri', email: 'reklam@saglikturizmiradari.com' },
              { label: 'Düzeltme & Doğrulama', email: 'duzeltme@saglikturizmiradari.com' },
              { label: 'Basın & Medya', email: 'basin@saglikturizmiradari.com' },
              { label: 'KVKK & Gizlilik', email: 'kvkk@saglikturizmiradari.com' },
            ].map((item) => (
              <div key={item.label} className="bg-[#F5F7F9] p-4 rounded border border-[#DDE3E8]">
                <span className="text-[11px] font-bold text-[#5B6B79] uppercase block mb-1">
                  {item.label}
                </span>
                <a
                  href={`mailto:${item.email}`}
                  className="text-[#00A6A6] font-semibold hover:underline text-xs"
                >
                  {item.email}
                </a>
              </div>
            ))}
          </div>
          <p className="text-xs text-[#5B6B79]">
            Yazar olmak için{' '}
            <Link href="/yazar-ol" className="text-[#00A6A6] underline font-semibold">
              Yazar Başvuru Formu
            </Link>{' '}
            sayfasını kullanabilirsiniz.
          </p>
        </div>
      ),
    },
    'gizlilik-politikasi': {
      title: 'Gizlilik Politikası',
      body: (
        <div className="space-y-4 text-sm text-[#17212B] leading-relaxed">
          <p>
            Sağlık Turizmi Radarı, kullanıcıların kişisel verilerinin korunmasına büyük önem verir. Bu politika, hangi verilerin toplandığını, nasıl kullanıldığını ve nasıl korunduğunu açıklar.
          </p>
          <h2>Toplanan Veriler</h2>
          <ul className="pl-5 list-disc space-y-1 marker:text-[#00A6A6]">
            <li>Bülten aboneliğinde e-posta adresi ve isteğe bağlı ad</li>
            <li>Yazar başvurularında form verileri</li>
            <li>Düzeltme bildirimlerinde iletişim bilgileri</li>
            <li>Teknik: IP adresi, tarayıcı ve sayfa gezinti verileri (anonim)</li>
          </ul>
          <h2>Veri Kullanımı</h2>
          <p>
            Toplanan veriler; bülten gönderimi, başvuru değerlendirmesi ve hizmet kalitesini iyileştirmek amacıyla kullanılır. Üçüncü taraflarla ticari amaçla paylaşılmaz.
          </p>
          <p className="text-xs text-[#5B6B79] italic mt-4">
            Son güncelleme: Eylül 2026
          </p>
        </div>
      ),
    },
    'cerez-politikasi': {
      title: 'Çerez Politikası',
      body: (
        <div className="space-y-4 text-sm text-[#17212B] leading-relaxed">
          <p>
            Sağlık Turizmi Radarı, site işlevselliğini sağlamak ve kullanıcı deneyimini iyileştirmek amacıyla çerez kullanabilir.
          </p>
          <h2>Kullanılan Çerez Türleri</h2>
          <ul className="pl-5 list-disc space-y-1 marker:text-[#00A6A6]">
            <li><strong>Zorunlu çerezler:</strong> Sitenin temel işlevleri için gereklidir; devre dışı bırakılamaz.</li>
            <li><strong>Analitik çerezler:</strong> Ziyaretçi sayısı ve popüler sayfaları ölçmek amacıyla kullanılır (anonim).</li>
            <li><strong>Tercih çerezleri:</strong> Dil ve gezinti tercihlerini hatırlamak için kullanılır.</li>
          </ul>
          <p>
            Tarayıcı ayarlarınızdan çerezleri yönetebilir veya reddedebilirsiniz.
          </p>
        </div>
      ),
    },
    'kullanim-kosullari': {
      title: 'Kullanım Koşulları',
      body: (
        <div className="space-y-4 text-sm text-[#17212B] leading-relaxed">
          <p>
            Bu siteyi kullanarak aşağıdaki koşulları kabul etmiş sayılırsınız.
          </p>
          <ul className="pl-5 list-disc space-y-1 marker:text-[#00A6A6]">
            <li>Site içerikleri sektörel bilgilendirme amaçlı olup tıbbi tavsiye veya hukuki mütalaa niteliği taşımaz.</li>
            <li>İçeriklerin ticari amaçla kopyalanması, çoğaltılması veya dağıtılması yasaktır.</li>
            <li>Alıntılarda kaynak gösterilmesi zorunludur.</li>
            <li>Platform, içeriklerin doğruluğu için azami özeni gösterir; ancak bilgilerin eksiksizliğini garanti etmez.</li>
          </ul>
        </div>
      ),
    },
    kvkk: {
      title: 'KVKK Aydınlatma Metni',
      subtitle: '6698 Sayılı Kişisel Verilerin Korunması Kanunu Kapsamında',
      body: (
        <div className="space-y-4 text-sm text-[#17212B] leading-relaxed">
          <p>
            Sağlık Turizmi Radarı olarak, 6698 sayılı Kişisel Verilerin Korunması Kanunu uyarınca sizi aşağıda belirtilen konularda aydınlatmak istiyoruz.
          </p>
          <h2>Veri Sorumlusu</h2>
          <p>
            Veri sorumlusu: Sağlık Turizmi Radarı / Overseas Marketing (İletişim: kvkk@saglikturizmiradari.com)
          </p>
          <h2>İşlenen Kişisel Veriler ve Amaç</h2>
          <ul className="pl-5 list-disc space-y-1 marker:text-[#00A6A6]">
            <li><strong>E-posta adresi:</strong> Bülten göndermek amacıyla, açık rıza ile işlenir.</li>
            <li><strong>Ad ve iletişim bilgileri:</strong> Yazar başvuruları ve düzeltme bildirimleri için işlenir.</li>
            <li><strong>IP ve teknik veriler:</strong> Site güvenliği ve anonim analitik amaçlı meşru menfaat kapsamında işlenir.</li>
          </ul>
          <h2>Haklarınız</h2>
          <p>
            KVKK'nın 11. maddesi uyarınca; verilerinize erişim, düzeltme, silme, işlemenin kısıtlanması ve itiraz haklarına sahipsiniz. Taleplerinizi{' '}
            <Link href="mailto:kvkk@saglikturizmiradari.com" className="text-[#00A6A6] underline">
              kvkk@saglikturizmiradari.com
            </Link>{' '}
            adresine iletebilirsiniz.
          </p>
          <p className="text-xs text-[#5B6B79] italic">
            Son güncelleme: Eylül 2026
          </p>
        </div>
      ),
    },
  };

  const page = content[slug];

  if (!page) {
    return (
      <div className="py-20 text-center">
        <h1 className="text-2xl font-bold text-[#102A43]">Sayfa Bulunamadı</h1>
        <Link href="/" className="text-[#00A6A6] mt-4 inline-block">
          Ana Sayfaya Dön
        </Link>
      </div>
    );
  }

  return (
    <PolicyPage title={page.title} subtitle={page.subtitle}>
      {page.body}
    </PolicyPage>
  );
}
