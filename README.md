This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Haberlerin canlı yayına yansıması

Vercel projesi `habersitesi`, üretim dalı `master` olarak ayarlanmıştır. İçerik ve kod değişikliklerinin bu dala gönderilmesi üretim dağıtımını başlatır. Önizleme dağıtımının hazır olması, özel alan adının güncellendiği anlamına gelmez; dağıtımın Production ortamında olduğunu ve `www.saglikturizmiradari.com` adresine atandığını kontrol edin.

Anasayfa her istekte yayımlanmış haberleri `publishedAt` tarihine göre yeniden sıralar. En yeni haber manşette, sonraki dört haber yan manşetlerde gösterilir. Son Haberler listesi de en yeni haberle başlar. Eski `isHeadline` işareti yeni haberin önüne geçmez. Açık anasayfa haftada bir otomatik güncellenir. Sekmeye geri dönmek, bir hafta dolmadan yenilemeyi tetiklemez; haftalık süre sekme gizliyken dolmuşsa sekme yeniden görünür olduğunda güncellenir.

Sıralama regresyon kontrolü: `node --test tests/homepage-freshness.test.mjs`.
