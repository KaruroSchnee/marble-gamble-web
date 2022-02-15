import React from 'react'
import type { NextPage } from 'next'
import { Banner, BannerBackground, Section } from './styled'

export const MainHome: NextPage = () => {
    return (
        <>
            <Banner>
                <BannerBackground src='/assets/images/marble-background-2.jpg'/>
            </Banner>
            <Section>

            </Section>
            <Section>
            </Section>
        </>
    )
}

export default MainHome
