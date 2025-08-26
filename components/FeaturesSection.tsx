import React from 'react';
import { Rocket, HeadsetIcon, HandshakeIcon, ShieldCheck } from 'lucide-react';

interface ServiceCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    bgColor: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, bgColor }) => {
    return (
        <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 text-center">
            <div className={`w-16 h-16 ${bgColor} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                {icon}
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">{title}</h3>
            <p className="text-gray-600 leading-relaxed text-sm">{description}</p>
        </div>
    );
};

const ServicesSection: React.FC = () => {
    const services = [
        {
            icon: <Rocket size={42} color="white" />,
            title: "Fast Website",
            description: "Create a fast website that is compatible with all search engines",
            bgColor: "bg-blue-600"
        },
        {
            icon: <HeadsetIcon size={42} color="white" />,
            title: "Technical Support",
            description: "A full technical support team available 24 hours a day",
            bgColor: "bg-orange-400"
        },
        {
            icon: <HandshakeIcon size={42} color="white" />,
            title: "Competitive Price",
            description: "Our high-quality services are competitively priced, which provides great value for your investment",
            bgColor: "bg-pink-500"
        },
        {
            icon: <ShieldCheck size={42} color="white" />,
            title: "Secure Website",
            description: "We offer comprehensive protection to prevent your site from any hacking or future risks",
            bgColor: "bg-cyan-500"
        }
    ];
    return (
        <section className="py-16 px-4 bg-gray-50" dir="rtl">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <ServiceCard
                            key={index}
                            icon={service.icon}
                            title={service.title}
                            description={service.description}
                            bgColor={service.bgColor}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;