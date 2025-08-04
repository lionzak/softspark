import PackageCard from '@/components/PackageCard';
import { packages } from '@/data/packages';

export default function Services() {
  return (
    <div className="container mx-auto px-4 py-12 bg-backgroundLight">
      <h1 className="text-4xl font-bold text-center text-primary">Our Services</h1>
      <p className="text-lg text-textMuted text-center mt-4">
        Choose the perfect package for your business needs.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
        {packages.map((pkg, index) => (
          <PackageCard key={index} pkg={pkg} />
        ))}
      </div>
    </div>
  );
}