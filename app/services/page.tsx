// ===== SERVICES PAGE (app/services/page.tsx) =====
import FeaturesSection from '@/components/FeaturesSection';
import PackageCard from '@/components/PackageCard';
import { packages, uiuxServices } from '@/data/packages';
import { Highlight } from '@/components/ui/hero-highlight';

export const metadata = {
  title: 'Web Development Services - Full Solutions & UI/UX Design | SoftSpark',
  description: 'Comprehensive web development services including full-stack solutions, UI/UX design, and prototyping. Choose the perfect package for your business needs.',
  keywords: 'web development services, UI/UX design, full-stack development, web design packages, business websites, Cairo web development',
  openGraph: {
    title: 'Professional Web Development Services | SoftSpark',
    description: 'From simple websites to complex web applications. Explore our comprehensive web development and UI/UX design services.',
    url: 'https://softspark.me/services',
  },
  alternates: {
    canonical: 'https://softspark.me/services',
  },
};

export default function Services() {
  const servicesStructuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Web Development Services",
    "description": "Comprehensive web development and UI/UX design services",
    "provider": {
      "@type": "Organization",
      "name": "SoftSpark"
    },
    "areaServed": "Egypt",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Web Development Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Full-Stack Web Development"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "UI/UX Design & Prototyping"
          }
        }
      ]
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesStructuredData) }}
      />
      
      <div className="container mx-auto px-4 py-12 bg-black">
        <header className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
            <Highlight>Professional Web Development Services</Highlight>
          </h1>
          <p className="text-base sm:text-lg text-white max-w-2xl mx-auto">
            Choose the perfect web development package for your business needs. From simple websites to complex applications.
          </p>
        </header>

        <section>
          <FeaturesSection />
        </section>

        <main className="">
          {/* Full Solutions Section */}
          <section aria-labelledby="full-solutions-heading" className="mb-12">
            <hr className="mt-5 border-2 border-blue-500" />
            <header className="mt-8 mb-12">
              <h2 id="full-solutions-heading" className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-primary">
                Full Web Development Solutions
              </h2>
              <p className="text-white text-center mt-2">Complete web development packages from concept to deployment</p>
            </header>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8" role="list">
              {packages.map((pkg, index) => (
                <div key={index} role="listitem">
                  <PackageCard pkg={pkg} />
                </div>
              ))}
            </div>
          </section>

          {/* UI/UX Design Section */}
          <section aria-labelledby="uiux-heading">
            <hr className="mt-8 border-2 border-blue-500" />
            <header className="mt-8 mb-8">
              <h2 id="uiux-heading" className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-primary">
                UI/UX Design & Prototyping Services
              </h2>
              <p className="text-white text-center mt-2">Professional design services to create stunning user experiences</p>
            </header>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8" role="list">
              {uiuxServices.map((pkg, index) => (
                <div key={index} role="listitem">
                  <PackageCard pkg={pkg} isUIUX={true} />
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
