import Image from 'next/image';
import Link from 'next/link';
import Button from './Button';

export default function Footer() {
  return (
    <footer className="bg-[#0A2540] text-white">
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-12">
        <div className="grid md:grid-cols-12 gap-10">

          {/* Brand Column */}
          <div className="md:col-span-5">
            <Link href="/" className="flex items-center gap-3 group mb-4">
              <div className="w-11 h-11 bg-linear-to-br from-black to-[#3d3005] rounded-xl flex items-center justify-center text-[#0A2540] font-bold text-3xl transition-transform group-hover:scale-110">
                <Image src="/img/logo2.png" width={50} height={50} alt='logo-img' />
              </div>
              <div>
                <h1 className="text-2xl font-bold tracking-tighter">AGAPE</h1>
                <p className="text-xs text-gray-400 -mt-1 font-medium">STEWARDSHIP CAPITAL LIMITED</p>
              </div>
            </Link>

            <p className="text-gray-300 max-w-md mb-6">
              Building sustainable wealth through disciplined investment, strategic partnership,
              and institutional-grade financial stewardship.
            </p>

            <div className="text-sm text-gray-400">
              <p>Motto: <span className="text-[#E8B923]">Wealth With Team</span></p>
              <p className="mt-1">Founded • 5 January 2025 • Nigeria</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2">
            <h3 className="font-semibold text-lg mb-6 text-[#E8B923]">Company</h3>
            <ul className="space-y-3 text-gray-300">
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Our Services</Link></li>
              <li><Link href="/insights" className="hover:text-white transition-colors">Insights</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Careers</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="md:col-span-2">
            <h3 className="font-semibold text-lg mb-6 text-[#E8B923]">Services</h3>
            <ul className="space-y-3 text-gray-300">
              <li><Link href="/services" className="hover:text-white transition-colors">Forex Trading</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Real Estate</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Wealth Management</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Financial Education</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-3">
            <h3 className="font-semibold text-lg mb-6 text-[#E8B923]">Get In Touch</h3>

            <div className="space-y-4 text-gray-300">
              <p>
                <span className="block text-sm text-gray-400">Email</span>
                <a href="mailto:agapestewardshipsupport@gmail.com" className="hover:text-[#E8B923] transition-colors">
                  agapestewardshipsupport@gmail.com
                </a>
              </p>

              <p>
                <span className="block text-sm text-gray-400">Headquarters</span>
                Nigeria
              </p>
            </div>

            <div className="mt-8">
              <Button
                href="/contact"
                className='py-3'
              >
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Agape Stewardship Capital Limited. All Rights Reserved.</p>

          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-white transition-colors">Risk Disclosure</Link>
          </div>

          <p className="mt-4 md:mt-0">Designed with excellence</p>
        </div>
      </div>
    </footer>
  );
}