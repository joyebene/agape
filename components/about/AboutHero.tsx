import Image from 'next/image';
import Button from '../shared/Button';
import { BiStar } from 'react-icons/bi';

export default function AboutHero() {
  return (
    <section className="relative bg-[#0A2540] text-white overflow-hidden">
      {/* Mobile Background Image */}
      <div className="md:hidden absolute inset-0">
        <Image
          src="/img/img (3).png"
          alt="Agape Team Background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#0A2540]/90" />
      </div>
      
      <div className="absolute inset-0 bg-[radial-gradient(at_center,#E8B92315_0%,transparent_60%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 md:py-32">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Text Content */}
          <div className="text-center md:text-left">
            <div className="inline-flex items-center gap-2 border border-white/20 px-6 py-2 rounded-xl mb-6">
              <span className="text-[#E8B923] mb-1"><BiStar /></span>
              <span className="text-[#E8B923] text-[12px] sm:text-sm font-medium tracking-widest">Since 5th January 2025</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-tight mb-6">
              Building Wealth <br />
              <span className="text-[#E8B923]">With Purpose</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 max-w-xl mx-auto md:mx-0 mb-10">
              We are more than an investment company.<br />
              We are stewards of your financial future.
            </p>

            <Button 
              href="#our-story"
            >
              Discover Our Story
            </Button>
          </div>

          {/* Right Side: Image */}
          <div className="hidden md:block relative h-96">
            <Image 
              src="/img/img (3).png"
              alt="Agape Team"
              fill
              className="object-cover rounded-3xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-[#0A2540]/40 rounded-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}