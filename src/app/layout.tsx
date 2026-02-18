import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import LocalBusinessSchema from '@/components/seo/LocalBusinessSchema';

export const metadata: Metadata = {
  title: 'Immunity Yoga and Gym Studio | Best Yoga & Gym in Ludhiana',
  description: 'Strengthen your body and calm your mind with expert yoga and gym sessions at Immunity Yoga and Gym Studio in Ludhiana, Punjab.',
  keywords: 'yoga classes, gym in ludhiana, fitness studio, weight loss, immunity yoga, jamalpur gym, yoga teacher training, meditation',
  authors: [{ name: 'Immunity Yoga and Gym Studio' }],
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://immunityyogaandgym.com',
    siteName: 'Immunity Yoga and Gym Studio',
    title: 'Immunity Yoga and Gym Studio | Best Yoga & Gym in Ludhiana',
    description: 'Join the best yoga and fitness studio in Ludhiana. Offering Hatha Yoga, Vinyasa, Power Yoga, and modern gym facilities.',
    images: [
      {
        url: 'https://immunityyogaandgym.com/og-image.jpg', // Placeholder
        width: 1200,
        height: 630,
        alt: 'Immunity Yoga and Gym Studio',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <LocalBusinessSchema />
        <Header />
        <main style={{ minHeight: 'calc(100vh - 80px - 300px)' }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
