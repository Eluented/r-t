import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Rosalind',
  description:
    "Learn about Rosalind's 30+ years of teaching experience, SEN specialism, and personalised tutoring approach for children across Key Stages 1-3.",
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: "About Rosalind | Rosalind's Tuition",
    description:
      "Meet Rosalind and discover her specialist SEN tutoring background, qualifications, and child-focused teaching approach.",
    url: 'https://rosalindstuition.com/about',
    images: ['/rosalind_portrait3.webp'],
  },
  twitter: {
    title: "About Rosalind | Rosalind's Tuition",
    description:
      "Discover Rosalind's experience, SEN expertise, and philosophy behind personalised tutoring.",
    images: ['/rosalind_portrait3.webp'],
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
