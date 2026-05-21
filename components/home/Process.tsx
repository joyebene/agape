import { FaHandsHelping, FaClipboardList, FaChartLine, FaStar } from 'react-icons/fa';

export default function Process() {
  const steps = [
    {
      number: "01",
      title: "Initial Consultation",
      description: "We start by understanding your financial goals, risk appetite, and current situation through a detailed discovery session.",
      icon: <FaHandsHelping />,
    },
    {
      number: "02",
      title: "Strategic Planning",
      description: "Our team designs a personalized wealth-building system combining forex, real estate, and diversified investments.",
      icon: <FaClipboardList />,
    },
    {
      number: "03",
      title: "Capital Deployment",
      description: "Disciplined execution of investment strategies with strict risk management and continuous performance monitoring.",
      icon: <FaChartLine />,
    },
    {
      number: "04",
      title: "Growth & Stewardship",
      description: "Regular reviews, profit reinvestment, financial education, and long-term partnership for sustainable wealth creation.",
      icon: <FaStar />,
    },
  ];

  return (
    <section className="py-24 bg-[#F8F9FC]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0A2540] tracking-tight mb-4">
            How We Work
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A clear, disciplined, and transparent process designed to transform your financial future.
          </p>
          <div className="w-24 h-1 bg-linear-to-r from-[#E8B923] to-[#D4AF37] mx-auto mt-6"></div>
        </div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-4 gap-8 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-0.75 bg-linear-to-r from-[#E8B923]/30 to-[#D4AF37]/30" />

          {steps.map((step, index) => (
            <div 
              key={index}
              className="relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              {/* Number */}
              <div className="text-6xl font-bold text-[#E8B923]/50 group-hover:text-[#E8B923]/40 transition-colors absolute -top-6 right-6">
                {step.number}
              </div>

              {/* Icon */}
              <div className="text-5xl mb-6 text-black">{step.icon}</div>

              <h3 className="text-2xl font-semibold text-[#0A2540] mb-4">
                {step.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {step.description}
              </p>

              {/* Decorative bottom accent */}
              <div className="h-1 w-12 bg-linear-to-r from-[#E8B923] to-[#D4AF37] mt-8 rounded-full" />
            </div>
          ))}
        </div>

        {/* Trust Bar */}
        <div className="mt-20 bg-[#0A2540] text-white rounded-3xl py-10 px-8 text-center">
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            From day one, you are not just an investor — you become a partner in a disciplined 
            wealth-building ecosystem.
          </p>
          <p className="text-[#E8B923] font-semibold mt-4">— Agape Stewardship Capital</p>
        </div>
      </div>
    </section>
  );
}