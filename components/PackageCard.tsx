'use client'
import { Package } from '@/types';
import { useRouter } from 'next/navigation';

interface PackageCardProps {
  pkg: Package;
  isFeatured?: boolean;
  isUIUX?: boolean;
}

const PackageCard: React.FC<PackageCardProps> = ({ pkg, isFeatured = false, isUIUX = false }) => {
  const router = useRouter();

  // Function to calculate discounted price
  const calculateDiscountedPrice = (price: string): string => {
    if (price.includes('–')) {
      const [min, max] = price
        .replace(' EGP', '')
        .split('–')
        .map((p) => parseFloat(p.replace(',', '')));
      const discountedMin = (min * 0.85).toFixed(0);
      const discountedMax = (max * 0.85).toFixed(0);
      return `${Number(discountedMin).toLocaleString()}–${Number(discountedMax).toLocaleString()} EGP`;
    }
    const numericPrice = parseFloat(price.replace(',', '').replace(' EGP', ''));
    const discountedPrice = (numericPrice * 0.85).toFixed(0);
    return `${Number(discountedPrice).toLocaleString()} EGP`;
  };

  // Get the appropriate image based on package name
  const getPackageIcon = () => {
    const getImagePath = () => {
      switch (pkg.name.toLowerCase()) {
        case 'starter':
          return '/starter.png';
        case 'business':
          return '/business.png';

        case 'pro system':
          return '/pro.png';
      }
    };

    return (
      <div className={`w-16 h-16 ${isFeatured ? 'bg-white bg-opacity-20' : 'bg-gray-50'} rounded-xl flex items-center justify-center mb-4`}>
        <img
          src={getImagePath()}
          alt={`${pkg.name} icon`}
          className="w-32 h-32 object-contain"
          onError={(e) => {
            // Fallback to a default icon if image fails to load
            const target = e.target as HTMLImageElement;
            target.src = '/icons/default-icon.png';
          }}
        />
      </div>
    );
  };

  // Determine if this is the Business package (for featured styling)
  const isBusinessPackage = pkg.name.toLowerCase() === 'business';

  return (
    <div className={`rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-between h-full min-h-[550px] relative ${isBusinessPackage
      ? 'bg-gradient-to-br from-cyan-400 to-blue-500 text-white scale-105'
      : 'bg-white border border-gray-200'
      }`}>

      {/* Featured Badge */}
      {isBusinessPackage && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <div className="bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
            Most Popular
          </div>
        </div>
      )}

      {/* Header Section */}
      <div>
        {!isUIUX ? getPackageIcon() : null}

        <div className="mb-6">
          <h3 className={`text-2xl font-bold ${isBusinessPackage ? 'text-white' : 'text-gray-800'}`}>
            {pkg.name}
          </h3>
          <p className={`text-sm font-medium mt-1 ${isBusinessPackage ? 'text-white text-opacity-90' : 'text-gray-600'}`}>
            {pkg.delivery}
          </p>
        </div>

        {/* Pricing Section */}
        <div className="mb-6">
          <div className="flex items-baseline gap-2">
            <span className={`text-sm line-through ${isBusinessPackage ? 'text-white text-opacity-60' : 'text-gray-400'}`}>
              {pkg.price}
            </span>
            <span className={`text-2xl font-bold ${isBusinessPackage ? 'text-white' : 'text-green-600'}`}>
              {calculateDiscountedPrice(pkg.price)}
            </span>
          </div>
        </div>

        {/* Features List */}
        <ul className="space-y-3 mb-8">
          {pkg.features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              <div className={`w-5 h-5 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0 ${isBusinessPackage ? 'bg-white bg-opacity-20' : 'bg-green-50'
                }`}>
                <svg
                  className={`w-3 h-3 ${isBusinessPackage ? 'text-white' : 'text-green-600'}`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <span className={`text-sm leading-relaxed ${isBusinessPackage ? 'text-white' : 'text-gray-700'}`}>
                {feature}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* CTA Button */}
      <button
        className={`w-full py-4 px-6 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 ${isBusinessPackage
          ? 'bg-white text-cyan-600 hover:bg-gray-50 shadow-lg'
          : 'bg-blue-600 text-white hover:bg-blue-700 border-2 border-blue-600 hover:border-blue-700'
          }`}
        onClick={() => router.push('/contact')}
      >
        Get Started
      </button>
    </div>
  );
};

export default PackageCard;