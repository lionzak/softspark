// ===== HOME PAGE (app/page.tsx) =====
'use client'
import Link from 'next/link';
import PackageCard from '@/components/PackageCard';
import { packages } from '@/data/packages';
import { useRouter } from 'next/navigation';
import GetStarted from '@/components/GetStarted';


export default function Home() {
  const router = useRouter();

  // Structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "SoftSpark",
    "description": "Professional web development and design services",
    "url": "https://yourdomain.com",
    "logo": "https://yourdomain.com/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+201224213669",
      "contactType": "customer service",
      "availableLanguage": ["English", "Arabic"]
    },
    "sameAs": [
      "https://www.facebook.com/share/1EBfHEmSJy",
      "https://www.instagram.com/softspark_solutions/",
      "https://www.linkedin.com/company/softspark-tech"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Cairo",
      "addressCountry": "Egypt"
    },
    "offers": {
      "@type": "Service",
      "name": "Web Development Services",
      "description": "Custom web development, responsive design, and web applications"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <div className="min-h-screen bg-backgroundLight">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
          
          {/* Hero Section with SEO-optimized headings */}
          <section className="text-center py-8 sm:py-12 lg:py-16 xl:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary to-secondary text-white rounded-lg sm:rounded-xl lg:rounded-2xl shadow-lg sm:shadow-xl">
            <header className="space-y-2 sm:space-y-4">
              <div className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-4 lg:gap-6">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                  Transform Your Business with
                </h1>
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold border-b-2 sm:border-b-4 border-accent leading-tight">
                  SoftSpark
                </h1>
              </div>
            </header>
            
            <p className="text-sm sm:text-base md:text-lg lg:text-xl mt-4 sm:mt-6 lg:mt-8 max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl mx-auto text-white/90 leading-relaxed px-2">
              We deliver modern, responsive, and scalable web solutions tailored to your needs. Let&apos;s build your digital future today.
            </p>
            
            <Link href="/contact" aria-label="Get a free quote for your web development project">
              <button className="mt-6 sm:mt-8 lg:mt-10 bg-white text-primary px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-4 rounded-lg sm:rounded-xl hover:bg-accent hover:text-white transition-all duration-300 font-semibold text-sm sm:text-base lg:text-lg shadow-md hover:shadow-lg transform hover:-translate-y-1 min-h-[44px] min-w-[120px]">
                Get a Free Quote
              </button>
            </Link>
          </section>

          {/* Services Overview with semantic HTML */}
          <section className="mt-8 sm:mt-12 lg:mt-16 xl:mt-20" aria-labelledby="services-heading">
            <header className="text-center mb-6 sm:mb-8 lg:mb-12">
              <h2 id="services-heading" className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-2 sm:mb-4">
                Our Web Development Services
              </h2>
              <p className="text-sm sm:text-base lg:text-lg text-textMuted max-w-2xl mx-auto px-4">
                From simple websites to complex web apps, we have a package for every business.
              </p>
            </header>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12" role="list">
              {packages.map((pkg, index) => (
                <div key={index} className="w-full" role="listitem">
                  <PackageCard pkg={pkg} />
                </div>
              ))}
            </div>
            
            <div className="text-center">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary mb-4 sm:mb-6">
                See More Services
              </h3>
              <button
                className="bg-secondary text-white px-6 sm:px-8 lg:px-10 py-3 sm:py-4 rounded-lg sm:rounded-xl hover:bg-primary transition-all duration-300 font-medium text-sm sm:text-base shadow-md hover:shadow-lg transform hover:-translate-y-1 min-h-[44px]"
                onClick={() => router.push('/services')}
                aria-label="Explore all our web development services"
              >
                Explore More Services
              </button>
            </div>
          </section>

          {/* Why Choose Us with structured content */}
          <section className="mt-8 sm:mt-12 lg:mt-16 xl:mt-20" aria-labelledby="why-choose-heading">
            <header className="text-center mb-6 sm:mb-8 lg:mb-12">
              <h2 id="why-choose-heading" className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-2 sm:mb-4">
                Why Choose SoftSpark for Web Development?
              </h2>
            </header>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8" role="list">
              <article className="p-4 sm:p-5 lg:p-6 border border-border rounded-lg sm:rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 bg-backgroundLight transform hover:-translate-y-1" role="listitem">
                <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-primary mb-2 sm:mb-3">
                  Quality Design
                </h3>
                <p className="text-sm sm:text-base text-textMuted leading-relaxed">
                  Clean, modern, and user-friendly designs tailored to your brand identity.
                </p>
              </article>
              
              <article className="p-4 sm:p-5 lg:p-6 border border-border rounded-lg sm:rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 bg-backgroundLight transform hover:-translate-y-1" role="listitem">
                <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-primary mb-2 sm:mb-3">
                  Fast Delivery
                </h3>
                <p className="text-sm sm:text-base text-textMuted leading-relaxed">
                  Get your project live in days, not weeks, with our streamlined development process.
                </p>
              </article>
              
              <article className="p-4 sm:p-5 lg:p-6 border border-border rounded-lg sm:rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 bg-backgroundLight transform hover:-translate-y-1 sm:col-span-2 lg:col-span-1" role="listitem">
                <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-primary mb-2 sm:mb-3">
                  Affordable Pricing
                </h3>
                <p className="text-sm sm:text-base text-textMuted leading-relaxed">
                  Competitive packages designed for businesses of all sizes and budgets.
                </p>
              </article>
            </div>
          </section>

          {/* CTA Section */}
          <div className="mt-8 sm:mt-12 lg:mt-16">
            <GetStarted />
          </div>
        </div>
      </div>
    </>
  );
}
