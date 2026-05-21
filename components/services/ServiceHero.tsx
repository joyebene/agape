import Image from 'next/image';
import Button from '../shared/Button';
import { BiStar } from 'react-icons/bi';


export default function ServicesHero() {
    return (
        <section className="relative h-screen sm:h-[70vh] flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <Image
                src="/img/img (3).jpg"
                alt="Our Services"
                fill
                className="object-cover"
            />
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-[#0A2540]/80" />


            <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
                <div className="inline-flex items-center gap-2 border border-white/20 px-6 py-2 rounded-xl mb-6">
                    <span className="text-[#E8B923] mb-1"><BiStar /></span>
                     <span className="text-[#E8B923] text-[12px] sm:text-sm font-medium tracking-widest">Our Expertise</span>
                </div>


                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tighter mb-6">
                    Strategic Investment <br />
                    <span className="text-[#E8B923]">Solutions</span>
                </h1>


                <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-10">
                    We offer disciplined, high-conviction investment opportunities designed for
                    sustainable wealth creation in forex, real estate, and capital management.
                </p>


                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button
                        href="#our-services"
                    >
                        Explore Our Services
                    </Button>

                    <Button
                        href="#consultation"
                        variant="secondary"
                    >
                        Get Personalized Advice
                    </Button>
                </div>
            </div>
        </section>
    );
}