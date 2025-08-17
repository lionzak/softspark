import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import './globals.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import DiscountBanner from '@/components/DiscountBanner';



config.autoAddCss = false;

export const metadata = {
  title: 'SoftSpark - Software Solutions',
  description: 'Professional software and web development solutions by SoftSpark.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <DiscountBanner />
        <main className="flex-grow">{children}</main>
        <Analytics />
        <SpeedInsights />

        <Footer />
      </body>
    </html>
  );
}