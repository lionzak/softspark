// components/ProjectsShowcase.tsx
"use client";

import Image from "next/image";

const projects = [
  {
    title: "Clinics & Healthcare",
    desc: "Professional websites for doctors, clinics, and healthcare centers that build trust and simplify patient bookings.",
    img: "/clinic.webp",
  },
  {
    title: "Educational Platforms",
    desc: "Custom learning management systems and school/university websites with modern designs and easy navigation.",
    img: "/education.webp",
  },
  {
    title: "E-Commerce Stores",
    desc: "High-performance online shops optimized for conversions, with secure payments and fast load times.",
    img: "/shopping.webp",
  },
  {
    title: "Portfolios & Personal Brands",
    desc: "Elegant personal websites and portfolios that showcase your work with impact and professionalism.",
    img: "/portfolio.webp",
  },
];

export default function ProjectsShowcase() {
  return (
    <section className="py-20 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Projects We Build
        </h2>

        <div className="space-y-20">
          {projects.map((p, i) => (
            <div
              key={i}
              className={`flex flex-col md:flex-row items-center gap-10 ${
                i % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Image */}
              <div className="w-full md:w-1/2">
                <Image
                  src={p.img}
                  alt={p.title}
                  width={500}
                  height={300}
                  className="rounded-2xl shadow-lg object-cover"
                />
              </div>

              {/* Text */}
              <div className="w-full md:w-1/2">
                <h3 className="text-2xl font-semibold mb-4 text-cyan-400">{p.title}</h3>
                <p className="">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
