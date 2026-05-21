import Image from 'next/image';
import Link from 'next/link';
import { BsArrowRight } from 'react-icons/bs';
import { FaMoneyBillWave, FaBuilding, FaShieldAlt } from 'react-icons/fa';

const services = [
  {
    title: "Forex Trading",
    description: "Disciplined currency trading with institutional risk management and proven strategies for consistent growth.",
    image: "/img/img (1).jpg",
    icon: <FaMoneyBillWave />,
  },
  {
    title: "Real Estate Investment",
    description: "Curated premium property investments and group funding opportunities with strong long-term returns.",
    image: "/img/img (4).png", 
    icon: <FaBuilding />,
  },
  {
    title: "Wealth Management",
    description: "Comprehensive capital stewardship, portfolio management, and strategic wealth-building systems.",
    image: "/img/img (4).jpg",
    icon: <FaShieldAlt />,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0A2540] tracking-tight mb-4">
            Our Financial Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Strategic investment vehicles designed for sustainable wealth creation and long-term financial security.
          </p>
          <div className="w-24 h-1 bg-linear-to-r from-[#E8B923] to-[#D4AF37] mx-auto mt-6"></div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-[#E8B923]/30"
            >
              {/* Image */}
              <div className="relative h-64">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent" />
                
                {/* Icon Overlay */}
                <div className="absolute top-6 right-6 w-14 h-14 bg-white/90 backdrop-blur-md rounded-2xl flex items-center justify-center text-3xl shadow-lg">
                  {service.icon}
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-[#0A2540] mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-8">
                  {service.description}
                </p>
                
                <Link 
                  href="#consultation"
                  className="inline-flex items-center gap-2 text-[#E8B923] font-semibold group-hover:gap-3 transition-all"
                >
                  Learn More 
                  <span className="text-xl"><BsArrowRight /></span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}