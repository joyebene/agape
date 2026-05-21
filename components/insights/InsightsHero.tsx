import { FaChartLine } from 'react-icons/fa';
import Button from '../shared/Button';

export default function InsightsHero() {
  return (
    <section className="relative h-[85vh] sm:h-[70vh] flex items-center justify-center bg-[#0A2540] overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(at_center,#E8B92315_0%,transparent_70%)]" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md px-6 py-3 rounded-xl mb-8 border border-white/20">
          <FaChartLine className="text-[#E8B923]" />
          <span className="uppercase tracking-widest text-sm font-medium text-white">INSIGHTS & ANALYSIS</span>
        </div>

        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tighter leading-tight mb-6">
          Market Insights &amp;<br />
          <span className="text-[#E8B923]">Wealth Wisdom</span>
        </h1>

        <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10">
          Stay informed with expert analysis, market trends, financial education, 
          and strategic investment insights from our team.
        </p>

        <Button
          href="#latest-insights"
          className='py-3 md:py-4'
        >
          Explore Latest Insights
        </Button>
      </div>
    </section>
  );
}