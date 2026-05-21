import Image from "next/image";

export default function Leadership() {
  const leaders = [
    {
      name: "Dr. Chinedu Okoro",
      role: "Chief Executive Officer (CEO)",
      description: "Visionary leader with over 15 years of experience in financial markets and wealth management.",
      image: "https://picsum.photos/id/64/600/800"
    },
    {
      name: "Aisha Bello",
      role: "Chief of Staff",
      description: "Ensures operational excellence and seamless coordination across all departments.",
      image: "https://picsum.photos/id/65/600/800"
    },
    {
      name: "Michael Adeyemi",
      role: "Financial Manager",
      description: "Oversees capital allocation, portfolio performance, and financial strategy.",
      image: "https://picsum.photos/id/201/600/800"
    },
    {
      name: "Fatima Okonkwo",
      role: "Risk Manager",
      description: "Leads our disciplined risk management framework to protect and grow partner capital.",
      image: "https://picsum.photos/id/1005/600/800"
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0A2540] tracking-tight mb-4">
            Our Leadership Team
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Seasoned professionals committed to institutional discipline and your long-term success.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {leaders.map((leader, index) => (
            <div key={index} className="group">
              <div className="relative h-80 rounded-3xl overflow-hidden mb-6 shadow-lg">
                <Image
                  src={leader.image} 
                  alt={leader.name}
                  fill
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent" />
              </div>
              
              <h3 className="text-xl font-semibold text-[#0A2540]">{leader.name}</h3>
              <p className="text-[#E8B923] font-medium mb-3">{leader.role}</p>
              <p className="text-gray-600 text-sm leading-relaxed">
                {leader.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-500 italic">
            A leadership team built on integrity, expertise, and a shared commitment to stewardship.
          </p>
        </div>
      </div>
    </section>
  );
}