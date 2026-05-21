import { FaMapMarkerAlt } from 'react-icons/fa';

export default function ContactHero() {
  return (
    <section className="relative h-[65vh] flex items-center justify-center bg-[#0A2540] overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(at_center,#E8B92315_0%,transparent_70%)]" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md px-6 py-3 rounded-xl mb-8 border border-white/20">
          <FaMapMarkerAlt className="text-[#E8B923]" />
          <span className="uppercase tracking-widest text-sm font-medium text-white">GET IN TOUCH</span>
        </div>

        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tighter leading-tight mb-6">
          Let&apos;s Build Your <br />
          <span className="text-[#E8B923]">Wealth Journey</span>
        </h1>

        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Ready to take the next step? Our team is here to guide you.
        </p>
      </div>
    </section>
  );
}