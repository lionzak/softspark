'use client'
import { useRouter } from "next/navigation";

export default function Portfolio() {
  const router = useRouter()
  const projects = [
    { title: 'E-Commerce Platform', description: 'A fully responsive online store with payment integration.', image: '/images/project1.jpg' },
    { title: 'Business Dashboard', description: 'A custom dashboard for real-time business analytics.', image: '/images/project2.jpg' },
    { title: 'Portfolio Website', description: 'A sleek portfolio for a creative agency.', image: '/images/project3.jpg' },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center text-primary">Our Portfolio</h1>
      <p className="text-lg text-gray-600 text-center mt-4">
        Explore some of our past projects and see what we can do for you.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
        {projects.map((project, index) => (
          <div key={index} className="border rounded-lg p-6 shadow">
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded" />
            <h3 className="text-xl font-semibold mt-4">{project.title}</h3>
            <p className="text-gray-600 mt-2">{project.description}</p>
          </div>
        ))}
      </div>
      <section className="mt-8 bg-backgroundLight py-12 rounded-lg">
        <h2 className="text-3xl font-bold text-center text-primary">Get started with SoftSpark</h2>
        <div className="flex justify-center">
          <button className="mt-6 bg-secondary text-white px-10 py-2 rounded hover:bg-primary transition" onClick={() => router.push("/contact")}>
            Get Started
          </button>
        </div>
      </section>
    </div>
  );
}