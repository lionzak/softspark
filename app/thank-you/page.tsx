// ===== THANK YOU PAGE (Server Component) =====
import ThankYouClient from "./ThankYouClient";
import { Metadata } from 'next'; // Import Metadata type

export const metadata: Metadata = { // Explicitly type metadata
  title: "Thank You - Message Received | SoftSpark",
  description:
    "Thank you for contacting SoftSpark. We have received your message and will get back to you shortly.",
  robots: {
    index: false, // Keep index: false for thank you page
    follow: true,
  },
  openGraph: { // Added OpenGraph metadata
    title: "Thank You - Message Received | SoftSpark",
    description: "Your message has been successfully received by SoftSpark. We will get back to you shortly.",
    url: "https://softspark.me/thank-you",
    type: "website",
  },
  alternates: { // Added canonical URL
    canonical: "https://softspark.me/thank-you",
  },
};

export default function ThankYouPage() {
  return <ThankYouClient />;
}
