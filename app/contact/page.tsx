// app/contact/page.tsx
import { Facebook, Instagram, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import ContactForm from '@/components/ContactForm'; // ✅ separate client component
import { Highlight } from '@/components/ui/hero-highlight';

export const metadata = {
  title: 'Contact SoftSpark - Get Your Free Web Development Quote',
  description: 'Contact SoftSpark for professional web development services. Get in touch via phone, email, or our contact form. Free quotes available.',
  keywords: 'contact web developer, web development quote, contact SoftSpark, web design consultation, Cairo web development',
  openGraph: {
    title: 'Contact SoftSpark - Web Development Services',
    description: 'Get in touch with SoftSpark for your web development needs. Professional consultation and free quotes available.',
    url: 'https://softspark.me/contact',
    type: 'website', // Added OpenGraph type
  },
  alternates: {
    canonical: 'https://softspark.me/contact',
  },
};

export default function Contact() {
  const contactStructuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact SoftSpark",
    "description": "Contact SoftSpark for web development services and free quotes.", // Enhanced description
    "url": "https://softspark.me/contact",
    "mainEntity": {
      "@type": "Organization",
      "name": "SoftSpark",
      "email": "mailto:softspark.software@gmail.com", // Use mailto: for email
      "telephone": "+201224213669",
      "address": { // Added address for organization
        "@type": "PostalAddress",
        "addressLocality": "Cairo",
        "addressCountry": "Egypt"
      },
      "sameAs": [ // Added social media links to organization schema
        "https://wa.me/+201224213669",
        "https://www.facebook.com/share/1EBfHEmSJy/?mibextid=wwXIfr",
        "https://www.instagram.com/softspark_solutions/",
        "https://www.linkedin.com/company/softspark-tech"
      ]
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactStructuredData) }}
      />

      <div className="container mx-auto px-4 py-12 bg-black min-h-screen">
        <header className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            <Highlight>Contact SoftSpark - Web Development Services</Highlight>
          </h1>
          <p className="text-base sm:text-lg text-white max-w-2xl mx-auto">
            Get in touch with us to discuss your web development project needs. We provide free consultations and quotes.
          </p>
        </header>

        <main>
          {/* ✅ Client Form */}
          <ContactForm />

          {/* Contact Information */}
          <section className="text-center  pt-8 max-w-lg mx-auto" aria-labelledby="contact-info-heading">
            <h2 id="contact-info-heading" className="text-xl font-semibold mb-6 text-white">Other Ways to Reach Us</h2>

            <div className="mb-6">
              <div className="flex items-center justify-center mb-2">
                <Mail className="w-5 h-5 text-blue-600 mr-2" aria-hidden="true" />
                <span className="text-white font-medium">Email us directly:</span>
              </div>
              <Link href="mailto:softspark.software@gmail.com" className="text-blue-600 hover:text-blue-700 transition-colors">
                softspark.software@gmail.com
              </Link>
            </div>

            <p className="text-white mb-4">Connect with us on social media:</p>
            <nav aria-label="Social media links">
              <div className="flex justify-center space-x-6">
                <a href="https://wa.me/+201224213669" className="text-green-600 hover:text-green-700 transition-colors" aria-label="Contact us on WhatsApp" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faWhatsapp} size="2x" />
                </a>
                <a href="https://www.facebook.com/share/1EBfHEmSJy/?mibextid=wwXIfr" className="text-blue-600 hover:text-blue-700 transition-colors" aria-label="Follow us on Facebook" target="_blank" rel="noopener noreferrer">
                  <Facebook size={32} />
                </a>
                <a href="https://www.instagram.com/softspark_solutions/" className="text-pink-600 hover:text-pink-700 transition-colors" aria-label="Follow us on Instagram" target="_blank" rel="noopener noreferrer">
                  <Instagram size={32} />
                </a>
                <a href="https://www.linkedin.com/company/softspark-tech" className="text-sky-700 hover:text-sky-800 transition-colors" aria-label="Follow us on LinkedIn" target="_blank" rel="noopener noreferrer">
                  <Linkedin size={32} />
                </a>
              </div>
            </nav>
          </section>
        </main>
      </div>
    </>
  );
}
