import React from 'react';
import NavbarAppLanding from '../components/_App/NavbarAppLanding';
import MainBanner from '../components/AppLanding/MainBanner';
import WhyChooseUs from '../components/AppLanding/WhyChooseUs';
import Features from '../components/AppLanding/Features';
import ScreenshotsCarousel from '../components/AppLanding/ScreenshotsCarousel';
import HowToUse from '../components/AppLanding/HowToUse';
import Pricing from '../components/AppLanding/Pricing';
import Feedbacks from '../components/AppLanding/Feedbacks';
import Newsletter from '../components/AppLanding/Newsletter';
import FooterAppLanding from '../components/_App/FooterAppLanding';

const AppLanding = () => {
    return (
        <>
            <NavbarAppLanding />

            <MainBanner />

            <WhyChooseUs />

            <Features />

            <ScreenshotsCarousel />

            <HowToUse />

            <Pricing />

            <Feedbacks />

            <Newsletter />
            
            <FooterAppLanding />
        </>
    )
}

export default AppLanding;