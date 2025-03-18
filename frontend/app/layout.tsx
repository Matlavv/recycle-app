import type { Metadata } from 'next';
import './globals.css';

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
    <html lang="fr">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
