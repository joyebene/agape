'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import Button from './Button';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/about', label: 'About' },
    { href: '/insights', label: 'Insights' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="bg-[#0A2540] text-white sticky top-0 z-50 shadow-xl">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-11 h-11 bg-linear-to-br from-black to-[#3d3005] rounded-xl flex items-center justify-center text-[#0A2540] font-bold text-3xl transition-transform group-hover:scale-110">
            <Image src="/img/logo2.png" width={50} height={50} alt='logo-img' />
          </div>
          <div>
            <h1 className="text-2xl font-bold tracking-tighter">AGAPE</h1>
            <p className="text-xs text-gray-400 -mt-1 font-medium">STEWARDSHIP CAPITAL</p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10 text-lg font-medium">
          {navLinks.map(link => (
            <Link 
              key={link.href}
              href={link.href} 
              className={`transition-colors nav-link ${pathname === link.href ? 'text-[#E8B923]' : 'hover:text-[#E8B923]'}`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Button
            href="#consultation"
            className='md:py-3'
          >
            Get Started
          </Button>
        </div>

        {/* Mobile Hamburger */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-3xl focus:outline-none"
        >
          {isOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0A2540] border-t border-gray-700 py-8">
          <div className="px-6 flex flex-col gap-6 text-lg">
            {navLinks.map(link => (
              <Link 
                key={link.href}
                href={link.href} 
                onClick={() => setIsOpen(false)} 
                className={`transition-colors ${pathname === link.href ? 'text-[#E8B923]' : 'hover:text-[#E8B923]'}`}
              >
                {link.label}
              </Link>
            ))}
            
            <Button
              href="#consultation"
              onClick={() => setIsOpen(false)}
              className="w-full text-center mt-4"
            >
              Get Started
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}