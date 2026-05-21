import Hero from "@/components/home/Hero";
import Process from "@/components/home/Process";
import Services from "@/components/home/Services";
import WhyAgape from "@/components/home/WhyAgape";
import Consultation from "@/components/shared/Consultation";
import MotionWrapper from "@/components/shared/MotionWrapper";

export default function Home() {
  return (
    <div>
      <Hero />
      <div className="hidden md:block bg-white h-48" />
      <MotionWrapper>
        <Services />
      </MotionWrapper>
      <MotionWrapper>
        <Process />
      </MotionWrapper>
      <MotionWrapper>
        <WhyAgape />
      </MotionWrapper>
      <MotionWrapper>
        <Consultation />
      </MotionWrapper>
    </div>
  );
}