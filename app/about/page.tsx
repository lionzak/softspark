import GetStarted from '@/components/GetStarted';

export const metadata = {
  title: 'About SoftSpark - Professional Web Development Team in Cairo',
  description: 'Learn about SoftSpark, a dedicated team of web developers and designers in Cairo, Egypt. Discover our mission, vision, and values in delivering innovative web solutions.',
  keywords: 'about SoftSpark, web development team Cairo, professional web developers Egypt, web design company mission',
  openGraph: {
    title: 'About SoftSpark - Web Development Experts',
    description: 'Meet the SoftSpark team - dedicated professionals creating innovative web solutions for businesses.',
    url: 'https://softspark.me/about',
  },
  alternates: {
    canonical: 'https://softspark.me/about',
  },
};

export default function About() {
  const aboutStructuredData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About SoftSpark",
    "description": "Learn about SoftSpark web development company",
    "mainEntity": {
      "@type": "Organization",
      "name": "SoftSpark",
      "description": "Professional web development and design services company",
      "foundingLocation": {
        "@type": "Place",
        "name": "Cairo, Egypt"
      },
      "knowsAbout": [
        "Web Development",
        "UI/UX Design",
        "Responsive Design",
        "E-commerce Solutions"
      ],
      "areaServed": "Egypt",
      "slogan": "Transform Your Business with SoftSpark"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutStructuredData) }}
      />
      
      <div className="container mx-auto px-4 py-12 bg-backgroundLight">
        <main>
          {/* Header Section */}
          <header className="text-center mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-4">
              About SoftSpark
            </h1>
            <p className="text-base sm:text-lg text-textMuted max-w-2xl mx-auto leading-relaxed">
              We are a dedicated team of web development innovators in Cairo, Egypt, building cutting-edge web solutions to empower businesses across the region.
            </p>
          </header>

          {/* Mission & Vision Section */}
          <section className="mb-16" aria-labelledby="mission-vision-heading">
            <header className="text-center mb-8">
              <h2 id="mission-vision-heading" className="text-2xl sm:text-3xl font-bold text-primary">
                Our Mission & Vision
              </h2>
            </header>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              <article className="p-6 bg-white border border-border rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold text-primary mb-3">Our Mission</h3>
                <p className="text-textMuted leading-relaxed">
                  To deliver innovative, reliable, and affordable web solutions that empower businesses to achieve their digital goals and grow their online presence.
                </p>
              </article>
              
              <article className="p-6 bg-white border border-border rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold text-primary mb-3">Our Vision</h3>
                <p className="text-textMuted leading-relaxed">
                  To become the leading web development partner for businesses seeking smart, scalable, and beautifully designed digital solutions — empowering startups and enterprises across Egypt to thrive online.
                </p>
              </article>
            </div>
          </section>

          {/* Values Section */}
          <section className="mb-16" aria-labelledby="values-heading">
            <header className="text-center mb-8">
              <h2 id="values-heading" className="text-2xl sm:text-3xl font-bold text-primary">
                Our Core Values
              </h2>
              <p className="text-textMuted mt-2">The principles that guide everything we do</p>
            </header>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              <article className="p-6 border border-border rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 bg-white transform hover:-translate-y-1">
                <h3 className="text-lg sm:text-xl font-semibold text-primary mb-3">Quality Excellence</h3>
                <p className="text-textMuted leading-relaxed text-sm sm:text-base">
                  We prioritize excellence in every project, ensuring top-notch results that exceed expectations and deliver lasting value.
                </p>
              </article>
              
              <article className="p-6 border border-border rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 bg-white transform hover:-translate-y-1">
                <h3 className="text-lg sm:text-xl font-semibold text-primary mb-3">Client-Centric Approach</h3>
                <p className="text-textMuted leading-relaxed text-sm sm:text-base">
                  Your success is our priority. We listen carefully, adapt to your needs, and deliver solutions that truly serve your business goals.
                </p>
              </article>
              
              <article className="p-6 border border-border rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 bg-white transform hover:-translate-y-1 sm:col-span-2 lg:col-span-1">
                <h3 className="text-lg sm:text-xl font-semibold text-primary mb-3">Innovation & Technology</h3>
                <p className="text-textMuted leading-relaxed text-sm sm:text-base">
                  We embrace the latest technologies and best practices to create cutting-edge solutions that keep you ahead of the competition.
                </p>
              </article>
            </div>
          </section>

          {/* Why Choose Us Section */}
          <section className="mb-16" aria-labelledby="why-choose-heading">
            <header className="text-center mb-8">
              <h2 id="why-choose-heading" className="text-2xl sm:text-3xl font-bold text-primary">
                Why Businesses Choose SoftSpark
              </h2>
            </header>
            
            <div className="bg-white rounded-lg shadow-sm p-8 border border-border">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-4">Local Expertise</h3>
                  <p className="text-textMuted mb-6">
                    Based in Cairo, we understand the unique needs of Egyptian businesses and provide personalized service with local market insights.
                  </p>
                  
                  <h3 className="text-xl font-semibold text-primary mb-4">Proven Track Record</h3>
                  <p className="text-textMuted">
                    Our portfolio showcases successful projects across various industries, from e-commerce to business dashboards and portfolio websites.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-4">Comprehensive Services</h3>
                  <p className="text-textMuted mb-6">
                    From initial design concepts to full-stack development and ongoing maintenance, we handle every aspect of your web presence.
                  </p>
                  
                  <h3 className="text-xl font-semibold text-primary mb-4">Transparent Process</h3>
                  <p className="text-textMuted">
                    We maintain clear communication throughout the development process, ensuring you're always informed about your project's progress.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <GetStarted />
        </main>
      </div>
    </>
  );
}