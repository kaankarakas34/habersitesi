import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: '/arastirma/:slug',
        destination: '/haber/:slug',
      },
      {
        source: '/rehber/:slug',
        destination: '/haber/:slug',
      },
      {
        source: '/mevzuat/:slug',
        destination: '/haber/:slug',
      },
      {
        source: '/rapor/:slug',
        destination: '/haber/:slug',
      },
    ];
  },
};

export default nextConfig;
