import { Urbanist } from 'next/font/google';
import type { Metadata } from 'next';
import './globals.css';

const urbanist = Urbanist({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-urbanist',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Recycle Me',
  description: 'Trouvez où jeter vos dechets',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={urbanist.variable}>
      <body className={`antialiased font-urbanist`}>{children}</body>
    </html>
  );
}