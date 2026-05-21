import Image from 'next/image';

export default function OurStory() {
  return (
    <section id="our-story" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid lg:grid-cols-2 gap-16 items-end">
          
          {/* Left Content */}
          <div>
            <div className="inline-block bg-[#E8B923] text-[#0A2540] text-sm font-semibold px-5 py-2 rounded-full mb-6">
              OUR JOURNEY
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-[#0A2540] leading-tight tracking-tight mb-8">
              Born from a Vision to Transform Financial Lives
            </h2>

            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                Agape Stewardship Capital Limited was founded on <strong>5th January 2025</strong> in Nigeria 
                with a clear mission: to bridge the gap between ambition and sustainable wealth creation.
              </p>
              
              <p>
                We noticed that many hardworking individuals, traders, and entrepreneurs earn good income but 
                lack the structure, systems, and guidance needed to truly build and preserve wealth.
              </p>
              
              <p>
                Frustrated by the prevalence of scams, poor investment decisions, and lack of access to 
                professional opportunities, we created a disciplined, transparent, and partnership-driven 
                financial ecosystem.
              </p>
            </div>

            <div className="mt-10 p-6 bg-[#F8F9FC] rounded-2xl border border-gray-100">
              <p className="italic text-gray-700">
                “Talent without structure fails. Opportunity without guidance leads to loss.” 
              </p>
              <p className="text-right text-sm mt-3 text-[#E8B923] font-medium">— Our Founding Philosophy</p>
            </div>
          </div>

          {/* Right Side - Image and Key Stats */}
          <div className="space-y-8">
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white border border-gray-100 p-4 sm:p-6 md:p-8 rounded-3xl">
                <div className="text-4xl sm:text-5xl font-bold text-[#E8B923] mb-2">2025</div>
                <div className="text-[12px] sm:text-sm uppercase tracking-widest text-gray-500">Founded</div>
              </div>
              
              <div className="bg-white border border-gray-100 p-4 sm:p-6 md:p-8 rounded-3xl">
                <div className="text-4xl sm:text-5xl font-bold text-[#E8B923] mb-2">🇳🇬</div>
                <div className="text-[12px] sm:text-sm uppercase tracking-widest text-gray-500">Headquartered</div>
              </div>
            </div>

            <div className="bg-[#0A2540] text-white p-8 sm:p-10 rounded-3xl">
              <h3 className="text-2xl font-semibold mb-6">Core Philosophy</h3>
              <p className="text-lg leading-relaxed">
                Prosperity Through Partnership<br />
                <span className="text-[#E8B923]">Discipline • Stewardship • Long-term Growth</span>
              </p>
            </div>

            <div className="relative h-80 rounded-3xl overflow-hidden shadow-lg">
              <Image
                src="/img/img (2).png"
                alt="Our Journey"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}