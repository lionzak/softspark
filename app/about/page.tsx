import GetStarted from '@/components/GetStarted';

export default function About() {
  return (
    <div className="container mx-auto px-4 py-12 bg-backgroundLight">
      {/* Header Section */}
      <section className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-primary">About SoftSpark</h1>
        <p className="text-lg text-textMuted mt-4 max-w-2xl mx-auto">
          We are a dedicated team of innovators building cutting-edge web solutions to empower businesses.
        </p>
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
      <GetStarted />
    </div>
  );
}