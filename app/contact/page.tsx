import ContactHero from '@/components/contact/ContactHero';
import ContactSection from '@/components/contact/ContactSection';
import MotionWrapper from '@/components/shared/MotionWrapper';
import React from 'react'

const page = () => {
  return (
    <div>
      <MotionWrapper>
          <ContactHero />
      </MotionWrapper>
      <MotionWrapper>
        <ContactSection/>
      </MotionWrapper>
    </div>
  )
}

export default page;