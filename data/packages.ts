import { Package } from '@/types';

export const packages: Package[] = [
  {
    name: 'Starter',
    features: ['1-page website', 'Mobile-friendly', 'Contact form', 'Basic SEO setup'],
    delivery: '3–4 days',
    price: '3,000 EGP',
  },
  {
    name: 'Business',
    features: ['Up to 5 pages', 'Clean design', 'SEO setup', 'Social media & WhatsApp integration', 'Basic analytics'],
    delivery: '5–7 days',
    price: '6,500 EGP',
  },
  {
    name: 'Pro System',
    features: ['Web app or dashboard', 'Admin panel', 'Authentication', 'API integration', 'UI/UX included'],
    delivery: '17-20 days',
    price: '12,000–18,000 EGP',
  },
];
export const uiuxServices: Package[] = [
  {
    name: 'Starter',
    features: [
      '2 UI screens design (Figma)',
      'Low-fidelity wireframes',
      'Basic UX flow mapping',
      'Responsive layout',
    ],
    delivery: '3–4 days',
    price: '1,800 EGP',
  },
  {
    name: 'Standard',
    features: [
      'Up to 5 UI screens',
      'User flow + wireframes',
      'Interactive prototype (Figma)',
      'Responsive desktop & mobile',
    ],
    delivery: '5–7 days',
    price: '3,500 EGP',
  },
  {
    name: 'Premium',
    features: [
      'Full UI for website or app (up to 10 screens)',
      'Complete UX design + persona/user journey',
      'Clickable high-fidelity prototype',
      'Design system & components',
    ],
    delivery: '7–10 days',
    price: '6,000 EGP',
  },
];
