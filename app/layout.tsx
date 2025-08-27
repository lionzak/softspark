import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import './globals.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import DiscountBanner from '@/components/DiscountBanner';
import { Metadata } from 'next';
import { Space_Grotesk } from 'next/font/google'; // Correct import for next/font
import ParticlesBackground from '@/components/ParticlesBackground';
import ChatWidget from '@/components/ChatWidget';
import GoogleAnalytics from '@/components/GoogleAnalytics';

// Optimize font loading with next/font
const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-space-grotesk',
  display: 'swap', // Added display: 'swap' for better FOUT handling
});

config.autoAddCss = false;

export const metadata: Metadata = {
  title: "SoftSpark | Software Solutions",
  description: "SoftSpark offers custom web, mobile, and software solutions tailored to help businesses grow with cutting-edge technology.",
  keywords: ["software development", "web development", "Next.js", "custom software", "SoftSpark", "UI/UX Design", "E-commerce", "Responsive Design", "Cairo", "Egypt"], // Enhanced keywords
  openGraph: {
    title: "SoftSpark | Software Solutions",
    description: "Custom software & web development solutions for web, mobile, and more. Elevate your business with cutting-edge technology.", // Enhanced description
    url: "https://softspark.me", // Corrected URL to softspark.me
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
    description: "Custom software & web development solutions. Transform your business with SoftSpark's innovative web and mobile applications.", // Enhanced description
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { // Specific Googlebot directives
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  alternates: {
    canonical: 'https://softspark.me',
  },
  // Added viewport for responsiveness
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
  // Added application name
  applicationName: "SoftSpark",
  // Added theme color
  themeColor: "#000000",
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`flex flex-col min-h-screen ${spaceGrotesk.className}`}>
        <GoogleAnalytics />

        <ChatWidget />
        <Navbar />
        <ParticlesBackground />

        <DiscountBanner />
        <main className="flex-grow">{children}</main>

        {/* Vercel Analytics and Speed Insights are already optimized by Next.js */}
        <Analytics />
        <SpeedInsights />
        <Footer />
      </body>
    </html>
  );
}
