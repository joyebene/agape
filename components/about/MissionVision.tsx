import { FaBullseye, FaGlobeAfrica, FaHandsHelping } from 'react-icons/fa';

export default function MissionVision() {
  return (
    <section className="py-24 bg-[#0A2540] text-white">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Mission */}
          <div className="bg-[#0d2c4d] border border-white/10 rounded-3xl p-8 sm:p-10 transform hover:-translate-y-2 transition-all duration-300">
            <div className="text-[#E8B923] text-5xl mb-6">
              <FaBullseye />
            </div>
            <h3 className="text-3xl font-semibold mb-6">Our Mission</h3>
            <p className="text-gray-300 leading-relaxed text-lg">
              To create a trusted, disciplined financial ecosystem that empowers individuals and communities 
              with sustainable wealth-building systems through strategic investments, financial education, 
              and genuine partnership.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-[#0d2c4d] border border-white/10 rounded-3xl p-8 sm:p-10 transform hover:-translate-y-2 transition-all duration-300">
            <div className="text-[#E8B923] text-5xl mb-6">
              <FaGlobeAfrica />
            </div>
            <h3 className="text-3xl font-semibold mb-6">Our Vision</h3>
            <p className="text-gray-300 leading-relaxed text-lg">
              To become Africa’s leading stewardship-focused investment institution, known for 
              transforming lives through institutional discipline, innovation, and long-term wealth creation.
            </p>
          </div>

          {/* Philosophy */}
          <div className="bg-[#0d2c4d] border border-white/10 rounded-3xl p-8 sm:p-10 transform hover:-translate-y-2 transition-all duration-300">
            <div className="text-[#E8B923] text-5xl mb-6">
              <FaHandsHelping />
            </div>
            <h3 className="text-3xl font-semibold mb-6">Our Philosophy</h3>
            <div className="space-y-6">
              <div>
                <p className="italic text-xl text-white">&quot;Prosperity Through Partnership&quot;</p>
              </div>
              <div className="pt-6 border-t border-white/20">
                <p className="font-medium text-[#E8B923]">Supporting Values:</p>
                <ul className="mt-3 space-y-2 text-gray-300">
                  <li className='flex items-center gap-2'><span className="text-[#E8B923]">✓</span> Taking Calculated Risks</li>
                  <li className='flex items-center gap-2'><span className="text-[#E8B923]">✓</span> Institutional Discipline</li>
                  <li className='flex items-center gap-2'><span className="text-[#E8B923]">✓</span> Transparency & Stewardship</li>
                  <li className='flex items-center gap-2'><span className="text-[#E8B923]">✓</span> Long-term Thinking</li>
                  <li className='flex items-center gap-2'><span className="text-[#E8B923]">✓</span> Financial Empowerment</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Founding Quote */}
        <div className="mt-24 text-center max-w-3xl mx-auto border-t border-white/20 pt-12">
          <p className="text-2xl md:text-3xl italic font-light leading-relaxed text-gray-200">
            “We believe that talent without structure fails, and opportunity without guidance leads to loss. 
            At Agape, we provide both structure and guidance.”
          </p>
          <p className="mt-8 text-[#E8B923] font-medium">— Founders, Agape Stewardship Capital</p>
        </div>
      </div>
    </section>
  );
}