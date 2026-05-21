import Image from 'next/image';
import Link from 'next/link';
import { BsArrowRight } from 'react-icons/bs';

const insights = [
  {
    title: "2026 Forex Market Outlook: Opportunities in Emerging Markets",
    excerpt: "How the Naira, USD, and major currency pairs are expected to behave in 2026 and strategic positioning for Nigerian investors.",
    category: "Market Analysis",
    date: "May 18, 2026",
    readTime: "8 min",
    image: "https://picsum.photos/id/1015/800/600",
    externalLink: "https://www.reuters.com/markets/currencies/"   // Replace with better link when available
  },
  {
    title: "Why Real Estate Remains the Strongest Wealth Builder in Nigeria",
    excerpt: "Analyzing current trends, rental yields, and the best locations for high-return property investments in 2026.",
    category: "Real Estate",
    date: "May 15, 2026",
    readTime: "12 min",
    image: "https://picsum.photos/id/1016/800/600",
    externalLink: "https://www.businessday.ng/real-estate/"
  },
  {
    title: "The Power of Compound Discipline: Lessons from Successful Investors",
    excerpt: "How consistent small actions and disciplined systems create massive wealth over time.",
    category: "Financial Education",
    date: "May 12, 2026",
    readTime: "6 min",
    image: "https://picsum.photos/id/201/800/600",
    externalLink: "https://www.investopedia.com/articles/investing/093015/compound-interest-will-make-you-rich.asp"
  },
  {
    title: "Risk Management Strategies Every Investor Must Master",
    excerpt: "Practical frameworks we use at Agape to protect capital while pursuing strong returns.",
    category: "Risk Management",
    date: "May 10, 2026",
    readTime: "10 min",
    image: "https://picsum.photos/id/133/800/600",
    externalLink: "https://www.investopedia.com/articles/trading/09/risk-management.asp"
  },
];

export default function LatestInsights() {
  return (
    <section id="latest-insights" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0A2540] tracking-tight">
              Latest Insights
            </h2>
            <p className="text-gray-600 mt-3 text-lg">
              Expert analysis and wealth-building knowledge
            </p>
          </div>
          <a 
            href="https://www.investopedia.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 text-[#E8B923] font-medium hover:underline"
          >
            View All Insights <BsArrowRight />
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {insights.map((insight, index) => (
            <a 
              key={index}
              href={insight.externalLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white border border-gray-100 rounded-3xl overflow-hidden hover:shadow-xl transition-all duration-300 block"
            >
              <div className="relative h-64">
                <Image 
                  src={insight.image} 
                  alt={insight.title}
                  fill
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute top-4 left-4 bg-white/90 text-[#0A2540] text-xs font-medium px-4 py-1.5 rounded-full">
                  {insight.category}
                </div>
              </div>

              <div className="p-8">
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                  <span>{insight.date}</span>
                  <span>•</span>
                  <span>{insight.readTime}</span>
                </div>

                <h3 className="text-2xl font-semibold text-[#0A2540] leading-tight mb-4 group-hover:text-[#E8B923] transition-colors">
                  {insight.title}
                </h3>

                <p className="text-gray-600 leading-relaxed mb-6 line-clamp-3">
                  {insight.excerpt}
                </p>

                <span className="text-[#E8B923] font-semibold inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                  Read Full Article 
                  <span>↗</span>
                </span>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="https://www.investopedia.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-[#0A2540] text-white px-10 py-4 rounded-2xl font-semibold hover:bg-[#E8B923] hover:text-[#0A2540] transition-all"
          >
            Browse More Insights
          </a>
        </div>
      </div>
    </section>
  );
}