import Image from 'next/image';

export default function About() {
  return (
    <div className="container mx-auto px-4 py-12 bg-backgroundLight">
      {/* Header Section */}
      <section className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-primary">About DevSoft</h1>
        <p className="text-lg text-textMuted mt-4 max-w-2xl mx-auto">
          We are a dedicated team of innovators building cutting-edge web solutions to empower businesses.
        </p>
      </section>

      {/* Our Story */}
      <section className="mt-16 flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/2">
          <h2 className="text-3xl font-semibold text-primary">Our Story</h2>
          <p className="text-textMuted mt-4 leading-relaxed">
            Founded in 2023, DevSoft was born out of a passion for technology and a commitment to helping businesses thrive in the digital world. Our team of skilled developers, designers, and strategists work collaboratively to deliver tailored solutions that drive results. From startups to established enterprises, we partner with our clients to turn their visions into reality.
          </p>
        </div>
        <div className="md:w-1/2">
          <div className="bg-backgroundLight border border-border h-64 rounded-lg flex items-center justify-center">
            <span className="text-textMuted">[Placeholder for Team/Office Image]</span>
          </div>
        </div>
      </section>

      {/* Our Mission & Vision */}
      <section className="mt-16">
        <h2 className="text-3xl font-bold text-center text-primary">Our Mission & Vision</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <div className="p-6 bg-backgroundLight border border-border rounded-lg shadow">
            <h3 className="text-xl font-semibold text-primary">Mission</h3>
            <p className="text-textMuted mt-2">
              To deliver innovative, reliable, and affordable web solutions that empower businesses to achieve their goals.
            </p>
          </div>
          <div className="p-6 bg-backgroundLight border border-border rounded-lg shadow">
            <h3 className="text-xl font-semibold text-primary">Vision</h3>
            <p className="text-textMuted mt-2">
              To be a global leader in web development, known for creativity, quality, and client satisfaction.
            </p>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="mt-16">
        <h2 className="text-3xl font-bold text-center text-primary">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <div className="p-6 border border-border rounded-lg shadow hover:shadow-xl transition bg-backgroundLight">
            <h3 className="text-xl font-semibold text-primary">Quality</h3>
            <p className="text-textMuted mt-2">We prioritize excellence in every project, ensuring top-notch results.</p>
          </div>
          <div className="p-6 border border-border rounded-lg shadow hover:shadow-xl transition bg-backgroundLight">
            <h3 className="text-xl font-semibold text-primary">Client-Centric</h3>
            <p className="text-textMuted mt-2">Your satisfaction is our priority. We listen, adapt, and deliver.</p>
          </div>
          <div className="p-6 border border-border rounded-lg shadow hover:shadow-xl transition bg-backgroundLight">
            <h3 className="text-xl font-semibold text-primary">Innovation</h3>
            <p className="text-textMuted mt-2">We embrace the latest technologies to create cutting-edge solutions.</p>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="mt-16">
        <h2 className="text-3xl font-bold text-center text-primary">Meet Our Team</h2>
        <p className="text-lg text-textMuted text-center mt-4">
          Our talented team is here to bring your ideas to life.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <div className="text-center">
            <div className="bg-backgroundLight border border-border h-48 w-48 mx-auto rounded-full flex items-center justify-center">
              <span className="text-textMuted">[Team Member Photo]</span>
            </div>
            <h3 className="text-xl font-semibold mt-4 text-primary">John Doe</h3>
            <p className="text-textMuted">Lead Developer</p>
          </div>
          <div className="text-center">
            <div className="bg-backgroundLight border border-border h-48 w-48 mx-auto rounded-full flex items-center justify-center">
              <span className="text-textMuted">[Team Member Photo]</span>
            </div>
            <h3 className="text-xl font-semibold mt-4 text-primary">Jane Smith</h3>
            <p className="text-textMuted">UI/UX Designer</p>
          </div>
          <div className="text-center">
            <div className="bg-backgroundLight border border-border h-48 w-48 mx-auto rounded-full flex items-center justify-center">
              <span className="text-textMuted">[Team Member Photo]</span>
            </div>
            <h3 className="text-xl font-semibold mt-4 text-primary">Ahmed Ali</h3>
            <p className="text-textMuted">Project Manager</p>
          </div>
        </div>
      </section>
    </div>
  );
}