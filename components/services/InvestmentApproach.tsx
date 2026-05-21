import { FaBullseye, FaHandsHelping, FaChartBar, FaSeedling } from 'react-icons/fa';

export default function InvestmentApproach() {
  const principles = [
    {
      title: "Discipline First",
      desc: "Every decision is guided by strict risk management protocols and data-driven analysis.",
      icon: <FaBullseye />,
    },
    {
      title: "Partnership Model",
      desc: "We treat every client as a long-term partner, not just an investor.",
      icon: <FaHandsHelping />,
    },
    {
      title: "Transparency",
      desc: "Clear reporting, regular updates, and full visibility into how your capital is deployed.",
      icon: <FaChartBar />,
    },
    {
      title: "Sustainable Growth",
      desc: "Focus on long-term wealth creation rather than high-risk short-term gains.",
      icon: <FaSeedling />,
    },
  ];

  return (
    <section className="py-24 bg-[#F8F9FC]">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0A2540] tracking-tight mb-4">
            Our Investment Approach
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Built on discipline, stewardship, and the belief that true wealth is created through structure and partnership.
          </p>
        </div>

        {/* Principles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {principles.map((item, index) => (
            <div key={index} className="group bg-white p-8 rounded-3xl border border-transparent hover:border-[#E8B923]/40 hover:shadow-lg transition-all duration-300">
              <div className="text-5xl mb-6 text-[#0A2540] group-hover:text-[#E8B923] transition-colors duration-300">{item.icon}</div>
              <h3 className="text-2xl font-semibold text-[#0A2540] mb-3">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Mini Process Timeline */}
        <div className="bg-white rounded-3xl shadow p-10 md:p-16">
          <h3 className="text-center text-3xl font-semibold text-[#0A2540] mb-12">
            Simple &amp; Proven Process
          </h3>
          
          <div className="grid md:grid-cols-4 gap-8 relative">
            <div className="hidden md:block absolute top-8 left-0 right-0 h-0.5 bg-gray-200" />
            
            {[
              { num: "01", title: "Consultation", desc: "Understand your goals" },
              { num: "02", title: "Strategy Design", desc: "Build personalized plan" },
              { num: "03", title: "Capital Deployment", desc: "Execute with discipline" },
              { num: "04", title: "Monitoring & Growth", desc: "Review and scale" }
            ].map((step, i) => (
              <div key={i} className="relative text-center">
                <div className="w-16 h-16 mx-auto bg-white border-4 border-[#0A2540] text-[#0A2540] rounded-full flex items-center justify-center text-xl font-bold mb-6 z-10 relative">
                  {step.num}
                </div>
                <h4 className="font-semibold text-lg mb-2 text-black">{step.title}</h4>
                <p className="text-gray-600 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}