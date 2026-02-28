import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Rosalind's Tuition",
    short_name: 'Rosalind Tuition',
    description:
      'Expert one-to-one Maths, English and SEN tutoring in North West London and online.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#059669',
    lang: 'en-GB',
    categories: ['education', 'tutoring'],
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        src: '/favicon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
    ],
  };
}
