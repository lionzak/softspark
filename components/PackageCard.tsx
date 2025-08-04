'use client'
import { Package } from '@/types';
import { useRouter } from 'next/navigation';

interface PackageCardProps {
  pkg: Package;
}

const PackageCard: React.FC<PackageCardProps> = ({ pkg }) => {

  const router = useRouter();

  return (
    <div className="border rounded-lg p-6 shadow-lg hover:shadow-xl transition">
      <h3 className="text-2xl font-bold text-primary">{pkg.name}</h3>
      <p className="text-gray-600 mt-2">{pkg.delivery}</p>
      <p className="text-xl font-semibold text-accent mt-2">{pkg.price}</p>
      <ul className="mt-4 space-y-2">
        {pkg.features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <svg className="w-5 h-5 text-secondary mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            {feature}
          </li>
        ))}
      </ul>
      <button className="mt-6 bg-secondary text-white px-4 py-2 rounded hover:bg-primary transition" onClick={() => router.push("/contact")}>
        Get Started
      </button>
    </div>
  );
};

export default PackageCard;