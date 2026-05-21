'use client';

import Image from 'next/image';
import Button from '../shared/Button';
import { FaChartLine, FaBriefcase, FaShieldAlt } from 'react-icons/fa';
import { InfoCard } from '../shared/InfoCard';

export default function Hero() {
  const infoCards = [
    {
      icon: <FaChartLine />,
      title: 'Wealth Building',
      description: 'Structured systems for sustainable growth',
    },
    {
      icon: <FaBriefcase />,
      title: 'Investment Growth',
      description: 'Forex & strategic asset multiplication',
    },
    {
      icon: <FaShieldAlt />,
      title: 'Stewardship',
      description: 'Disciplined risk management & protection',
    },
  ];

  return (
    <section className="relative h-screen flex pt-10 sm:pt-0 justify-center">
      {/* Background Image */}
      <Image
        src="/img/img (2).jpg"
        alt="Lagos Cityscape"
        fill
        className="object-cover"
        priority
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-[#0A2540]/80 via-[#0A2540]/70 to-[#0A2540]/90" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:flex   gap-16 items-center">
        <div className="text-start">
          {/* Badge / Motto */}
          <div className="inline-flex items-center gap-2 border border-white/20 px-6 py-2 rounded-xl mb-6">
            <span className="text-[#E8B923] text-[12px] sm:text-sm font-medium tracking-widest">
              WEALTH WITH TEAM
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tighter mb-6">
            Achieve Financial Success <br />
            <span className="text-[#E8B923]">&amp; Security</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-200 mb-10">
            Strategic investments, disciplined wealth building, and partnership-driven growth 
            tailored for your future.
          </p>

          {/* CTA Buttons */}
          <div className="flex gap-3 sm:gap-5 items-center">
            <Button href="#consultation">Join Agape Today</Button>
            <Button href="#services" variant="secondary">
              Learn More
            </Button>
          </div>
        </div>

        {/* Right Side: Icons */}
        <div className="hidden sm:flex justify-center items-center gap-8 w-2/7 md:w-2/6">
        <div className='bg-linear-to-br from-black to-[#3d3005] p-4 rounded-xl'>
           <FaChartLine size={25} className="text-7xl text-white/80 md:w-12 md:h-12" />
        </div>
         <div className='bg-linear-to-br from-black to-[#3d3005] p-4 rounded-xl'>
                <FaBriefcase size={25} className="text-7xl text-white/80 md:w-12 md:h-12" />
         </div>

         <div className='bg-linear-to-br from-black to-[#3d3005] p-4 rounded-xl'>
            <FaShieldAlt size={25} className="text-7xl text-white/80 md:w-12 md:h-12" />
         </div>
    
        
        </div>
      </div>

      <div className="absolute -bottom-28 left-0 right-0 z-10 hidden md:block">
        <div className="grid grid-cols-3 gap-7 max-w-6xl mx-auto">
          {infoCards.map((card, index) => (
            <InfoCard
              key={index}
              icon={card.icon}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-9 md:bottom-20 left-1/2 transform -translate-x-1/2 text-white/70 flex flex-col items-center">
        <p className="text-sm tracking-widest mb-2">SCROLL TO EXPLORE</p>
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-center justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}