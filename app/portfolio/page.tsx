import Link from "next/link";
import Image from "next/image"; // Ensure Image is imported
import { Highlight } from "@/components/ui/hero-highlight";

export const metadata = {
  title: 'Our Portfolio - Web Development Projects | SoftSpark',
  description: 'Explore SoftSpark\'s portfolio of successful web development projects including business dashboards, e-commerce sites, and portfolio websites.',
  keywords: 'web development portfolio, business dashboard, e-commerce website, portfolio website, SoftSpark projects',
  openGraph: {
    title: 'SoftSpark Portfolio - Our Web Development Work',
    description: 'See examples of our web development projects and what we can create for your business.',
    url: 'https://softspark.me/portfolio',
    type: 'website', // Added OpenGraph type
  },
  alternates: {
    canonical: 'https://softspark.me/portfolio',
  },
};

export default function Portfolio() {
  const projects = [
    {
      title: 'Shopping Mall Website',
      description: 'A full-featured website for a shopping mall, including store directories, brand listings, events section, and contact integrations — designed for optimal user experience.',
      image: '/hc_mall.png',
      alt: 'Shopping mall website design showing modern layout and user-friendly navigation'
    },
    {
      title: 'Business Dashboard',
      description: 'A dynamic dashboard that allows business owners to track performance metrics and manage their website content in real-time — combining data visualization with a built-in CMS for full control.',
      image: '/dashboard.png',
      alt: 'Business dashboard interface with charts, metrics, and content management features'
    },
    {
      title: 'Portfolio Website',
      description: 'A clean and modern personal website to showcase skills and projects — perfect for freelancers and creatives looking to establish their online presence.',
      image: '/ereny.png',
      alt: 'Clean and modern portfolio website design for creative professionals'
    },
  ];

  const portfolioStructuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage", // Changed to CollectionPage for a portfolio
    "name": "SoftSpark Portfolio",
    "description": "Web development projects completed by SoftSpark, showcasing our expertise in various digital solutions.", // Enhanced description
    "url": "https://softspark.me/portfolio", // Added URL to CollectionPage schema
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": projects.map((project, index) => ({
        "@type": "CreativeWork",
        "position": index + 1,  
        "name": project.title,
        "description": project.description,
        "image": `https://softspark.me${project.image}`, // Absolute URL for image
        "creator": {
          "@type": "Organization",
          "name": "SoftSpark",
          "url": "https://softspark.me" // Added organization URL
        }
      }))
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(portfolioStructuredData) }}
      />

      <div className="container mx-auto px-4 py-12">
        <header className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
            <Highlight>Our Web Development Portfolio</Highlight>
          </h1>
          <p className="text-base sm:text-lg text-white max-w-2xl mx-auto">
            Explore some of our successful web development projects and see what we can create for your business.
          </p>
        </header>

        <main>
          <section aria-labelledby="projects-heading">
            <h2 id="projects-heading" className="sr-only">Featured Projects</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12" role="list">
              {projects.map((project, index) => (
                <article key={index} className="border rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden bg-white" role="listitem">
                  <div className="relative h-48 w-full">
                    <Image
                      src={project.image}
                      alt={project.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      loading={index < 2 ? "eager" : "lazy"} // Eager load first two images, lazy load others
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg sm:text-xl font-semibold mb-3 text-gray-900">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                      {project.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="bg-backgroundLight py-12 rounded-lg text-center" aria-labelledby="cta-heading">
            <header className="mb-6">
              <h2 id="cta-heading" className="text-2xl sm:text-3xl font-bold text-primary">
                Ready to Start Your Web Development Project?
              </h2>
              <p className="text-textMuted mt-2 max-w-xl mx-auto">
                Let&apos;s create something amazing together. Get started with SoftSpark today.
              </p>
            </header>
            <Link
              href="/contact"
              className="inline-block bg-secondary text-white px-8 sm:px-10 py-3 rounded-lg hover:bg-primary transition-colors font-medium min-h-[48px]"
              aria-label="Contact us to start your web development project"
            >
              Get Started Today
            </Link>
          </section>
        </main>
      </div>
    </>
  );
}
