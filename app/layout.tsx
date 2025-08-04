import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import './globals.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';


config.autoAddCss = false;

export const metadata = {
  title: 'DevSoft - Software Solutions',
  description: 'Professional software and web development solutions by DevSoft.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}