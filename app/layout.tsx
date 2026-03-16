import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://rosalindstuition.com'),
  applicationName: "Rosalind's Tuition",
  manifest: '/manifest.webmanifest',
  title: {
    default: "Private Tutor in Edgware, Barnet & Finchley | Rosalind's Tuition",
    template: "%s | Rosalind's Tuition"
  },
  description: "Private one-to-one Maths and English tutor in Edgware, Barnet, Finchley, Mill Hill, Hampstead, Harrow, Watford, Radlett and surrounding North West London and Hertfordshire areas. 30+ years of SEN, dyslexia, dyscalculia, EAL and exam tutoring experience.",
  keywords: ["private tutor edgware", "private tutor barnet", "private tutor finchley", "maths tutor north west london", "english tutor edgware", "SEN tutor barnet", "dyslexia tutor north london", "dyscalculia tutor london", "11+ tutor edgware", "EAL tutor finchley", "home tutor hertfordshire", "private tutor watford", "private tutor radlett", "one-to-one tutoring", "Key Stage 1 tutor", "Key Stage 2 tutor", "phonics tutor"],
  authors: [{ name: "Rosalind" }],
  creator: "Rosalind's Tuition",
  category: 'education',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      {
        url: '/favicon.ico',
        type: 'image/x-icon',
      },
      {
        url: '/favicon.svg',
        type: 'image/svg+xml',
      },
    ],
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
  alternates: {
    canonical: '/',
    languages: {
      'en-GB': '/',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://rosalindstuition.com',
    title: "Private Tutor in Edgware, Barnet & Finchley | Rosalind's Tuition",
    description: "Experienced private tutor for Maths, English and SEN support across Edgware, Barnet, Finchley, Hertfordshire and surrounding North West London areas.",
    siteName: "Rosalind's Tuition",
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: "Rosalind's Tuition - Specialist Maths and English Tutoring",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Private Tutor in Edgware, Barnet & Finchley | Rosalind's Tuition",
    description: "Private tutor for Maths, English and SEN support across North West London and Hertfordshire.",
    images: ['/twitter-image'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#059669',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
