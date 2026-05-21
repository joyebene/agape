import Image from 'next/image';
import { FaBuilding, FaMoneyBillWave, FaShieldAlt, FaBookOpen } from 'react-icons/fa';
import Button from '../shared/Button';

const services = [
  {
    id: "forex",
    title: "Forex Trading",
    icon: <FaMoneyBillWave className='text-white/80' />,
    image: "/img/img (1).jpg",
    description: "Professional currency trading with institutional-grade risk management, technical analysis, and disciplined execution strategies.",
    features: [
      "Major, Minor & Exotic Pairs",
      "Strict Risk Management",
      "Daily Market Analysis",
      "Performance Reports"
    ],
    return: "15-35% Average Annual Return*"
  },
  {
    id: "real-estate",
    title: "Real Estate Investment",
    icon: <FaBuilding className='text-white/80' />,
    image: "/img/img (4).png",
    description: "Access to premium residential and commercial properties through direct investment and pool funding structures.",
    features: [
      "High-Growth Properties",
      "Group Investment Model",
      "Rental Income + Appreciation",
      "Legal & Title Protection"
    ],
    return: "18-40% Projected Returns*"
  },
  {
    id: "wealth-management",
    title: "Wealth Management",
    icon: <FaShieldAlt className='text-white/80' />,
    image: "/img/img (4).jpg",
    description: "Comprehensive portfolio management, asset allocation, and long-term wealth stewardship tailored to your goals.",
    features: [
      "Personalized Strategy",
      "Diversified Portfolio",
      "Regular Performance Review",
      "Succession Planning"
    ],
    return: "Tailored Growth Plan"
  },
  {
    id: "financial-education",
    title: "Financial Education",
    icon: <FaBookOpen className='text-white/80' />,
    image: "/img/img (6).png",
    description: "Transform your financial mindset through structured learning programs, mentorship, and wealth-building workshops.",
    features: [
      "Beginner to Advanced Courses",
      "Live Trading Sessions",
      "Private Mentorship",
      "Community Support"
    ],
    return: "Knowledge is Wealth"
  }
];

export default function ServicesList() {
  return (
    <section id="our-services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0A2540] mb-4">
            Our Core Investment Services
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Each service is built on discipline, transparency, and our core philosophy of Prosperity Through Partnership.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {services.map((service) => (
            <div 
              key={service.id}
              className="group bg-white border border-gray-100 rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:border-[#E8B923]/30"
            >
              <div className="relative h-80">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent" />
                
                <div className="absolute top-8 left-8 text-6xl">{service.icon}</div>
                
                <div className="absolute bottom-8 left-8 right-8">
                  <h3 className="text-3xl font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-[#E8B923] font-medium">{service.return}</p>
                </div>
              </div>

              <div className="p-8">
                <p className="text-gray-600 leading-relaxed mb-8">
                  {service.description}
                </p>

                <div className="mb-8">
                  <h4 className="font-semibold text-[#0A2540] mb-4">Key Features</h4>
                  <ul className="grid grid-cols-2 gap-3">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                        <span className="text-[#E8B923] mt-1">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <Button 
                  href="#consultation"
                  className="block w-full hover:bg-[#0A2540] text-center font-semibold transition-all"
                >
                  Invest in {service.title}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}