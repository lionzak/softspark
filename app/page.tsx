'use client'
import Link from 'next/link';
import PackageCard from '@/components/PackageCard';
import { packages } from '@/data/packages';
import { useRouter } from 'next/navigation';
import GetStarted from '@/components/GetStarted';
import WhyUs from '@/components/WhyUs';
import { FlipWords } from '@/components/ui/flip-words';
import { Highlight } from '@/components/ui/hero-highlight';
import FAQSection from '@/components/FAQSection';
import Sparks from '@/components/Sparks';
import ProjectsShowcase from '@/components/ProjectsShowcase';

export default function Home() {
  const router = useRouter();

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "SoftSpark",
    "description": "Professional web development and design services, offering custom web, mobile, and software solutions.",
    "url": "https://softspark.me",
    "logo": "https://softspark.me/logo.png",
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
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className="min-h-screen">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">

          {/* Hero Section */}
          <section className="text-center py-8 sm:py-12 lg:py-16 xl:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#003F8E] to-[#1DBF73] text-white rounded-lg shadow-lg">
            <header className="space-y-2 sm:space-y-4">
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                <h1 className="text-3xl md:text-5xl font-bold leading-tight">
                  <span className="inline-block min-w-[11==5ch]"> 
                    <FlipWords
                      words={["Elevate", "Transform", "Innovate"]}
                      duration={1500}
                      className="text-[#FF9F40]"
                    />
                  </span>
                  {" "}your business with
                </h1>
                <h1 className="text-3xl md:text-5xl font-bold border-b-4 border-yellow-400 leading-tight">
                  SoftSpark
                </h1>
              </div>
            </header>

            <p className="text-base md:text-lg mt-6 max-w-2xl mx-auto text-white/90 leading-relaxed px-2">
              <Highlight>
                We deliver modern, responsive, and scalable web solutions tailored to your needs. Let&apos;s build your digital future today.
              </Highlight>
            </p>

            <Link href="/contact" aria-label="Get a free quote for your web development project">
              <button className="mt-8 bg-white text-primary px-8 py-4 rounded-xl hover:bg-accent hover:text-white transition-all duration-300 font-semibold text-lg shadow-md hover:shadow-lg transform hover:-translate-y-1 min-h-[44px] min-w-[120px]">
                Get a Free Quote
              </button>
            </Link>
          </section>

          {/* Services Section */}
          <section className="mt-16" aria-labelledby="services-heading">
            <header className="text-center mb-12">
              <h2 id="services-heading" className="text-3xl font-bold text-white mb-4">
                Our Web Development Services
              </h2>
              <p className="text-lg text-white max-w-2xl mx-auto">
                From simple websites to complex web apps, we have a package for every business.
              </p>
            </header>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {packages.map((pkg, index) => (
                <div key={index} className="w-full">
                  <PackageCard pkg={pkg} />
                </div>
              ))}
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-6">
                See More Services
              </h3>
              <button
                className="bg-secondary text-white px-8 py-4 rounded-xl hover:bg-primary transition-all duration-300 font-medium text-lg shadow-md hover:shadow-lg transform hover:-translate-y-1 min-h-[44px]"
                onClick={() => router.push('/services')}
                aria-label="Explore all our web development services"
              >
                Explore More Services
              </button>
            </div>
          </section>

          {/* Projects */}
          <section aria-labelledby="projects-heading" className="mt-16 border-t-4 border-blue-500">
            <ProjectsShowcase />
          </section>

          {/* FAQ */}
          <section aria-labelledby="faq-heading" className="mt-16 border-t-4 border-blue-500 pt-10">
            <FAQSection />
          </section>

          {/* Why Choose Us */}
          <section className="mt-16" aria-labelledby="why-choose-heading">
            <WhyUs />
          </section>

          {/* CTA */}
          <div className="relative mt-16">
            <Sparks />
            <GetStarted />
          </div>
        </div>
      </div>
    </>
  );
}
