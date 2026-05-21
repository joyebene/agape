import InsightsHero from '@/components/insights/InsightsHero'
import LatestInsights from '@/components/insights/LatestInsights'
import React from 'react'
import MotionWrapper from '@/components/shared/MotionWrapper';

const page = () => {
  return (
    <div>
      <MotionWrapper>
        <InsightsHero />
      </MotionWrapper>
      <MotionWrapper>
        <LatestInsights />
      </MotionWrapper>
    </div>
  )
}

export default page