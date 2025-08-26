import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import './globals.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import DiscountBanner from '@/components/DiscountBanner';
import { Metadata } from 'next';
import { Space_Grotesk } from 'next/font/google';
import ParticlesBackground from '@/components/ParticlesBackground';
import ChatWidget from '@/components/ChatWidget';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'], // adjust if you need other subsets
  weight: ['400', '500', '700'], // select the weights you need
  variable: '--font-space-grotesk', // optional CSS variable
});

config.autoAddCss = false;

export const metadata: Metadata = {
  title: "SoftSpark | Software Solutions",
  description: "SoftSpark offers custom web, mobile, and software solutions tailored to help businesses grow with cutting-edge technology.",
  keywords: ["software development", "web development", "Next.js", "custom software", "SoftSpark"],
  openGraph: {
    title: "SoftSpark | Software Solutions",
    description: "Custom software & web development solutions.",
    url: "https://softspark.com",
    siteName: "SoftSpark",
    images: [
      {
        url: "/og-image.png", // make sure you have this
        width: 1200,
        height: 630,
        alt: "SoftSpark Software Solutions",
      },
    ],
    type: "website",
    locale: 'en_US',
  },
  twitter: {
    card: "summary_large_image",
    title: "SoftSpark | Software Development Services",
    description: "Custom software & web development solutions.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://softspark.me',
  },
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`flex flex-col min-h-screen ${spaceGrotesk.className}`}>
        <ChatWidget />
        <Navbar />
        <ParticlesBackground />

        <DiscountBanner />
        <main className="flex-grow">{children}</main>
        <Analytics />
        <SpeedInsights />
        <Footer />
      </body>
    </html>
  );
}