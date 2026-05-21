import AboutHero from '@/components/about/AboutHero'
import FutureVision from '@/components/about/FutureVision'
import Leadership from '@/components/about/Leadership'
import MissionVision from '@/components/about/MissionVision'
import OurStory from '@/components/about/OurStory'
import MotionWrapper from '@/components/shared/MotionWrapper'
import React from 'react'

const page = () => {
    return (
        <div>
            <MotionWrapper>
                <AboutHero />
            </MotionWrapper>
            <MotionWrapper>
                <OurStory />
            </MotionWrapper>
            <MotionWrapper>
                <MissionVision />
            </MotionWrapper>
            <MotionWrapper>
                <Leadership />
            </MotionWrapper>
            <MotionWrapper>
                <FutureVision />
            </MotionWrapper>
        </div>
    )
}

export default page