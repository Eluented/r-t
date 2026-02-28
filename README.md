This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

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

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Contact Form Email Setup

The contact form sends directly to Web3Forms (client-side, free-tier compatible) and delivers to your configured Web3Forms recipient email.

1. Copy `.env.example` to `.env.local`
2. Configure your Web3Forms key and recipient:

```bash
NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=your-web3forms-access-key
GOOGLE_SITE_VERIFICATION=your-google-site-verification-token
```

3. Create a free Web3Forms account and generate an access key.
4. In the Web3Forms dashboard, set or verify recipient email as `onurbelek11@gmail.com`.

## SEO Setup (High Impact)

Technical SEO already implemented:
- Global metadata, Open Graph, Twitter cards, canonical tags
- Route-level metadata for `about`, `english`, `maths`, `contact`, `advocacy`
- Dynamic `sitemap.xml`, `robots.txt`, and `manifest.webmanifest`
- JSON-LD structured data for organization/local business/services/person/breadcrumbs

To maximize rankings after deploy:
1. Add your real domain and deploy publicly.
2. Set `GOOGLE_SITE_VERIFICATION` in production env.
3. Connect Google Search Console and submit `https://yourdomain.com/sitemap.xml`.
4. Connect Bing Webmaster Tools and submit the same sitemap.
5. Create/optimize Google Business Profile and keep NAP details consistent.
6. Gather high-quality local backlinks and client reviews (major ranking factor).

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
