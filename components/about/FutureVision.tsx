import { FaGlobeAfrica, FaUniversity, FaHandshake } from 'react-icons/fa';

export default function FutureVision() {
  return (
    <section className="pt-10 pb-24 bg-white text-[#0A2540]">
      <div className="max-w-5xl mx-auto px-6 text-center">
        
        <div className="inline-flex items-center gap-3 bg-[#E8B923]/10 px-6 py-2 rounded-xl mb-6 border border-[#E8B923]/30">
          <FaGlobeAfrica className="text-[#E8B923]" />
          <span className="uppercase tracking-widest text-sm font-semibold">Our Future</span>
        </div>

        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">
          Building a Global Legacy of Stewardship
        </h2>

        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-16">
          Agape Stewardship Capital is positioned for significant growth and international expansion 
          while maintaining our core values of discipline, partnership, and responsible wealth creation.
        </p>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="group bg-transparent border border-gray-200 rounded-3xl p-8 hover:border-[#E8B923]/50 hover:shadow-xl transition-all duration-300">
            <div className="text-5xl mb-5 text-[#E8B923]">
              <FaGlobeAfrica />
            </div>
            <h3 className="text-xl font-semibold mb-3">Global Expansion</h3>
            <p className="text-gray-600">Expanding beyond Nigeria into other African markets and eventually global opportunities.</p>
          </div>

          <div className="group bg-transparent border border-gray-200 rounded-3xl p-8 hover:border-[#E8B923]/50 hover:shadow-xl transition-all duration-300">
            <div className="text-5xl mb-5 text-[#E8B923]">
              <FaUniversity />
            </div>
            <h3 className="text-xl font-semibold mb-3">Institutional Structures</h3>
            <p className="text-gray-600">Developing advanced capital management systems and larger investment vehicles.</p>
          </div>

          <div className="group bg-transparent border border-gray-200 rounded-3xl p-8 hover:border-[#E8B923]/50 hover:shadow-xl transition-all duration-300">
            <div className="text-5xl mb-5 text-[#E8B923]">
              <FaHandshake />
            </div>
            <h3 className="text-xl font-semibold mb-3">Strategic Partnerships</h3>
            <p className="text-gray-600">Building alliances with international financial institutions and real estate developers.</p>
          </div>
        </div>

        <div className="mt-16 text-[#0A2540] text-lg font-semibold">
          Our vision is not just to grow wealth — but to create a lasting legacy of responsible stewardship across generations.
        </div>
      </div>
    </section>
  );
}