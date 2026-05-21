import InvestmentApproach from '@/components/services/InvestmentApproach'
import ServicesHero from '@/components/services/ServiceHero'
import ServicesList from '@/components/services/ServicesList'
import Consultation from '@/components/shared/Consultation'
import MotionWrapper from '@/components/shared/MotionWrapper'
import React from 'react'

const page = () => {
  return (
    <div>
      <MotionWrapper>
        <ServicesHero />
      </MotionWrapper>
      <MotionWrapper>
        <ServicesList />
      </MotionWrapper>
      <MotionWrapper>
        <InvestmentApproach />
      </MotionWrapper>
      <MotionWrapper>
        <Consultation />
      </MotionWrapper>
    </div>
  )
}

export default page;