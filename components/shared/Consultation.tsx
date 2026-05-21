'use client';

import Image from 'next/image';
import { BiStar } from 'react-icons/bi';
import Button from './Button';

export default function Consultation() {
  return (
    <section id="consultation" className="relative py-24 text-white overflow-hidden">
      {/* Background Image */}
      <Image
        src="/img/img (3).png"
        alt="Consultation Background"
        fill
        className="object-cover"
      />
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#0A2540]/80" />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <div className="inline-flex items-center gap-2 border border-white/20 px-6 py-2 rounded-xl mb-6">
          <span className="text-[#E8B923] mb-1"><BiStar /></span>
          <span className="uppercase tracking-widest text-[12px] sm:text-sm font-medium">Start Your Wealth Journey</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6">
          Ready to Build Sustainable Wealth?
        </h2>

        <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto mb-10">
          Book a free consultation with our team. We’ll understand your goals and show you 
          how Agape Stewardship Capital can help you achieve financial success through disciplined partnership.
        </p>

        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
          <Button 
            href="/contact"
            className='w-full sm:w-fit'
          >
            Schedule Free Consultation
          </Button>

          <Button 
            href="mailto:agapestewardshipsupport@gmail.com"
            variant='secondary'
            className='w-full sm:w-fit'
          >
            Send us an Email
          </Button>
        </div>

        <p className="text-sm text-gray-400 mt-10">
          Limited slots available • Response within 24 hours
        </p>
      </div>
    </section>
  );
}