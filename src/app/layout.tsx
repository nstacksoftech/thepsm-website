import type { Metadata } from 'next';
import { Lato } from 'next/font/google';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '@/styles/animation.css';
import '@/styles/thepsm-components.css';
import '@/styles/header-landing.css';
import '@/styles/blog-section.css';
import './globals.css';

const lato = Lato({
  subsets: ['latin'],
  weight: ['100', '300', '400', '700', '900'],
  style: ['normal', 'italic'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Field Sales Management App | PSM — thePSM.app',
  description:
    'PSM — field sales, attendance, meetings, orders, and team management. First 10 users free.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={lato.className}>{children}</body>
    </html>
  );
}
