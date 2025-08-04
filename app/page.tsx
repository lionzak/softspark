'use client'
import Link from 'next/link';
import PackageCard from '@/components/PackageCard';
import { packages } from '@/data/packages';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  return (
    <div className="container mx-auto px-4 py-12 bg-backgroundLight">
      {/* Hero Section */}
      <section className="text-center py-16 bg-gradient-to-r from-primary to-secondary text-white rounded-lg">
        <div className='flex justify-center text-center items-center text-5xl md:text-6xl font-bold gap-x-5'>
          <h1 >Transform Your Business with</h1>
          <h1 className='border-b-2 border-accent'>DevSoft</h1>
        </div>
        <p className="text-lg md:text-xl mt-4 max-w-2xl mx-auto text-white">
          We deliver modern, responsive, and scalable web solutions tailored to your needs. Let’s build your digital future today.
        </p>
        <Link href="/contact">
          <button className="mt-8 bg-white text-primary px-8 py-3 rounded-lg hover:bg-accent hover:text-white transition font-semibold">
            Get a Free Quote
          </button>
        </Link>
      </section>

      {/* Services Overview */}
      <section className="mt-16">
        <h2 className="text-3xl font-bold text-center text-primary">Our Services</h2>
        <p className="text-lg text-textMuted text-center mt-4">
          From simple websites to complex web apps, we have a package for every business.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {packages.map((pkg, index) => (
            <PackageCard key={index} pkg={pkg} />
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="mt-16">
        <h2 className="text-3xl font-bold text-center text-primary">Why Choose DevSoft?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <div className="p-6 border border-border rounded-lg shadow hover:shadow-xl transition bg-backgroundLight">
            <h3 className="text-xl font-semibold text-primary">Quality Design</h3>
            <p className="text-textMuted mt-2">Clean, modern, and user-friendly designs tailored to your brand.</p>
          </div>
          <div className="p-6 border border-border rounded-lg shadow hover:shadow-xl transition bg-backgroundLight">
            <h3 className="text-xl font-semibold text-primary">Fast Delivery</h3>
            <p className="text-textMuted mt-2">Get your project live in days, not weeks, with our streamlined process.</p>
          </div>
          <div className="p-6 border border-border rounded-lg shadow hover:shadow-xl transition bg-backgroundLight">
            <h3 className="text-xl font-semibold text-primary">Affordable Pricing</h3>
            <p className="text-textMuted mt-2">Competitive packages designed for businesses of all sizes.</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mt-16 bg-backgroundLight py-12 rounded-lg">
        <h2 className="text-3xl font-bold text-center text-primary">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 max-w-4xl mx-auto">
          <div className="p-6 bg-white rounded-lg shadow">
            <p className="text-textMuted italic">
              "DevSoft delivered a stunning website for our business in record time. Their team was professional and responsive!"
            </p>
            <p className="mt-4 font-semibold text-primary">— Ahmed Mostafa, CEO of NileTech</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow">
            <p className="text-textMuted italic">
              "The Pro System package transformed our operations with a custom dashboard. Highly recommend DevSoft!"
            </p>
            <p className="mt-4 font-semibold text-primary">— Sara Khaled, Founder of ShopEasy</p>
          </div>
        </div>
      </section>
      <section className="mt-8 bg-backgroundLight py-12 rounded-lg">
        <h2 className="text-3xl font-bold text-center text-primary">Get started with DevSoft</h2>
        <div className="flex justify-center">
          <button className="mt-6 bg-secondary text-white px-10 py-2 rounded hover:bg-primary transition" onClick={() => router.push("/contact")}>
            Get Started
          </button>
        </div>
      </section>
    </div>
  );
}