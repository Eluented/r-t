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
    default: "Rosalind's Tuition | Expert Maths & English Tutoring in North West London",
    template: "%s | Rosalind's Tuition"
  },
  description: "Professional one-to-one Maths and English tuition in North West London. 30+ years of experience supporting SEN, dyslexia, dyscalculia, EAL learners, and exam preparation. Covering Edgware, Barnet, Finchley, Hertfordshire & surrounding areas.",
  keywords: ["maths tutor north west london", "english tutor edgware", "SEN tutor", "dyslexia support", "dyscalculia tutor", "11+ tutor", "GCSE tutor", "EAL tutor", "home tuition barnet", "private tutor hertfordshire", "one-to-one tuition", "Key Stage 1 tutor", "Key Stage 2 tutor", "phonics tutor"],
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
        url: '/favicon.svg',
        type: 'image/svg+xml',
      },
    ],
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
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
    title: "Rosalind's Tuition | Expert Maths & English Tutoring in North West London",
    description: "30+ years of experience in Maths & English tuition. Specialist support for SEN, dyslexia, dyscalculia, and EAL learners across North West London.",
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
    title: "Rosalind's Tuition | Expert Maths & English Tutoring",
    description: "30+ years of experience in Maths & English tuition. Specialist SEN support across North West London.",
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
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="shortcut icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
      </head>
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
