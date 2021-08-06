import React from 'react';
import NavbarSaasLandingTwo from '../components/_App/NavbarSaasLandingTwo';
import MainBanner from '../components/SaasLandingTwo/MainBanner';
import Services from '../components/SaasLandingTwo/Services';
import Features from '../components/SaasLandingTwo/Features';
import MobileApp from '../components/SaasLandingTwo/MobileApp';
import Pricing from '../components/SaasLandingTwo/Pricing';
import FunFacts from '../components/SaasLandingTwo/FunFacts';
import Testimonials from '../components/SaasLandingTwo/Testimonials';
import Newsletter from '../components/SaasLandingTwo/Newsletter';
import FooterSaasLandingTwo from '../components/_App/FooterSaasLandingTwo';

const SaasLanding2 = () => {
    return (
        <>
            <NavbarSaasLandingTwo selected='dispensaries' />

            <MainBanner />

            <Services />

            <Features />

            <MobileApp />

            {/* <Pricing /> */}

            {/* <FunFacts /> */}

            {/* <Testimonials /> */}

            <Newsletter />
            
            <FooterSaasLandingTwo />
        </>
    )
}

export default SaasLanding2;