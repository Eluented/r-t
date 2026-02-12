import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rosalind's Maths and English Tuition | NW London Tutoring",
  description: "One-to-one tuition in Maths and English across North West London. Specialising in SEN support, dyslexia, dyscalculia, and entrance exam preparation. With 30 years' experience, Rosalind helps every child reach their full potential.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
