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

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-gradient-to-b from-black to-black min-h-screen">
        <main>
          {/* Header Section */}
          <header className="text-center mb-20 animate-fade-in">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-primary mb-6 tracking-tight text-white">
              About <span className="border-b-4 border-yellow-400 pb-1">SoftSpark</span>
            </h1>
            <p className="text-lg sm:text-xl text-white max-w-3xl mx-auto leading-relaxed opacity-90">
              We are a passionate team of web development innovators, crafting cutting-edge digital solutions to empower businesses across the region.
            </p>
          </header>

          {/* Mission & Vision Section */}
          <section className="mb-20" aria-labelledby="mission-vision-heading">
            <header className="text-center mb-12">
              <h2 id="mission-vision-heading" className="text-3xl sm:text-4xl font-bold text-primary text-white">
                Our Mission & Vision
              </h2>
              <p className="text-black mt-3 max-w-2xl mx-auto">Driving digital transformation with purpose and passion</p>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <article className="p-8 bg-white border border-border rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <h3 className="text-2xl font-semibold text-primary mb-4">Our Mission</h3>
                <p className="text-black leading-relaxed text-base">
                  To deliver innovative, reliable, and cost-effective web solutions that empower businesses to achieve their digital goals and amplify their online presence.
                </p>
              </article>

              <article className="p-8 bg-white border border-border rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <h3 className="text-2xl font-semibold text-primary mb-4">Our Vision</h3>
                <p className="text-black leading-relaxed text-base">
                  To be the leading web development partner in The Region, providing smart, scalable, and beautifully designed digital solutions that help startups and enterprises thrive online.
                </p>
              </article>
            </div>
          </section>

          {/* Values Section */}
          <section className="mb-20" aria-labelledby="values-heading">
            <header className="text-center mb-12">
              <h2 id="values-heading" className="text-3xl sm:text-4xl font-bold text-black">
                Our Core Values
              </h2>
              <p className="text-black mt-3 max-w-2xl mx-auto">The principles that shape our work and culture</p>
            </header>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <article className="p-8 bg-black border border-border rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br from-white to-gray-50">
                <h3 className="text-xl font-semibold text-primary mb-4">Quality Excellence</h3>
                <p className="text-black leading-relaxed text-base">
                  We strive for perfection in every project, delivering top-tier results that exceed expectations and provide lasting value.
                </p>
              </article>

              <article className="p-8 bg-black border border-border rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br from-white to-gray-50">
                <h3 className="text-xl font-semibold text-primary mb-4">Client-Centric Approach</h3>
                <p className="text-black leading-relaxed text-base">
                  Your success is our mission. We listen, adapt, and deliver tailored solutions that align with your business objectives.
                </p>
              </article>

              <article className="p-8 bg-black border border-border rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br from-white to-gray-50">
                <h3 className="text-xl font-semibold text-primary mb-4">Innovation & Technology</h3>
                <p className="text-black leading-relaxed text-base">
                  We leverage the latest technologies and best practices to build cutting-edge solutions that keep you ahead of the curve.
                </p>
              </article>
            </div>
          </section>

          {/* Why Choose Us Section */}
          <section className="mb-20" aria-labelledby="why-choose-heading">
            <header className="text-center mb-12">
              <h2 id="why-choose-heading" className="text-3xl sm:text-4xl font-bold text-white">
                Why Businesses Choose SoftSpark
              </h2>
              <p className="text-white mt-3 max-w-2xl mx-auto">Discover what sets us apart in web development</p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white rounded-xl shadow-lg p-10 border border-border">
              <div className="flex flex-col justify-center">
                <h3 className="text-2xl font-semibold text-primary mb-4">Comprehensive Services</h3>
                <p className="text-black leading-relaxed text-base">
                  From creative design to robust full-stack development and ongoing support, we manage every aspect of your digital presence with expertise.
                </p>
              </div>
              <div className="flex flex-col justify-center">
                <h3 className="text-2xl font-semibold text-primary mb-4">Transparent Process</h3>
                <p className="text-black leading-relaxed text-base">
                  We keep you informed at every step, ensuring clear communication and a seamless development experience tailored to your needs.
                </p>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="text-center py-12 bg-primary rounded-xl">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">Ready to Transform Your Digital Presence?</h2>
            <p className="text-lg max-w-2xl mx-auto mb-8 text-white">Join hands with SoftSpark to create innovative, scalable, and stunning web solutions tailored to your business.</p>
            <GetStarted />
          </section>
        </main>
      </div>
    </>
  );
}