import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Rosalind | Private Tutor in Edgware & North West London',
  description:
    "Learn about Rosalind's 30+ years of teaching experience, SEN specialism, and personalised tutoring approach for families in Edgware, Barnet, Finchley, Hertfordshire and surrounding North West London areas.",
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: "About Rosalind | Private Tutor in Edgware & North West London",
    description:
      "Meet Rosalind and discover her specialist SEN tutoring background, qualifications, and child-focused teaching approach for local families across North West London and Hertfordshire.",
    url: 'https://rosalindstuition.com/about',
    images: ['/rosalind_portrait3.webp'],
  },
  twitter: {
    title: "About Rosalind | Private Tutor in Edgware & North West London",
    description:
      "Discover Rosalind's experience, SEN expertise, and personalised tutoring approach for families across North West London and Hertfordshire.",
    images: ['/rosalind_portrait3.webp'],
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
