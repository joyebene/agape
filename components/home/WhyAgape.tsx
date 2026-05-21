import { FaShieldAlt, FaHandsHelping, FaBookOpen, FaChartPie, FaSearch, FaSeedling } from 'react-icons/fa';

export default function WhyAgape() {
  const advantages = [
    {
      title: "Institutional Discipline",
      description: "We operate with professional risk management and structured systems, not emotional or speculative decisions.",
      icon: <FaShieldAlt />,
    },
    {
      title: "Prosperity Through Partnership",
      description: "You are not just an investor — you become a valued partner in a collaborative wealth-building ecosystem.",
      icon: <FaHandsHelping />,
    },
    {
      title: "Financial Education",
      description: "We empower our partners with knowledge, transforming undisciplined traders into professional investors.",
      icon: <FaBookOpen />,
    },
    {
      title: "Calculated Risk Strategy",
      description: "Every investment goes through rigorous analysis, ensuring sustainable growth while protecting capital.",
      icon: <FaChartPie />,
    },
    {
      title: "Transparency & Trust",
      description: "Clear reporting, disciplined capital deployment, and full stewardship of every partner's funds.",
      icon: <FaSearch />,
    },
    {
      title: "Long-term Wealth Systems",
      description: "We don’t chase quick profits. We build lasting wealth through real estate, forex, and strategic reinvestment.",
      icon: <FaSeedling />,
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0A2540] tracking-tight mb-4">
            Why Choose Agape
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We don’t just invest capital — we build sustainable wealth systems through discipline, partnership, and stewardship.
          </p>
          <div className="w-24 h-1 bg-linear-to-r from-[#E8B923] to-[#D4AF37] mx-auto mt-6"></div>
        </div>

        {/* Advantages Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((item, index) => (
            <div 
              key={index}
              className="bg-white border border-gray-100 hover:border-[#E8B923]/30 rounded-3xl p-8 transition-all duration-300 hover:shadow-xl group"
            >
              <div className="text-5xl mb-6">{item.icon}</div>
              <h3 className="text-2xl font-semibold text-[#0A2540] mb-4 group-hover:text-[#E8B923] transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Philosophy Statement */}
          <div className="mt-20 bg-[#0A2540] text-white rounded-3xl py-10 px-8 text-center">
          <p className="text-lg md:text-xl font-light italic max-w-3xl mx-auto leading-relaxed">
            “Talent without structure fails. Opportunity without guidance leads to loss. 
            At Agape, we provide both — structure and guidance — for sustainable prosperity.”
          </p>
          <p className="mt-8 text-[#E8B923] font-semibold tracking-widest">
            — Core Philosophy
          </p>
        </div>
      </div>
    </section>
  );
}