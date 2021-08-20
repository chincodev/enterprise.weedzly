import React from 'react';
import NavbarSaasLandingTwo from '../components/_App/NavbarSaasLandingTwo';
import MainBanner from '../components/MainBanner';
import Services from '../components/Services';
import Features from '../components/Features';
import MobileApp from '../components/MobileApp';
import Pricing from '../components/Pricing';
import FunFacts from '../components/FunFacts';
import Testimonials from '../components/Testimonials';
import Newsletter from '../components/Newsletter';
import FooterSaasLandingTwo from '../components/_App/FooterSaasLandingTwo';
import { Helmet } from 'react-helmet';

const SaasLanding2 = () => {
    return (
        <>
            <Helmet>
                <title>Weedzly Enterprise - Solutions for Cannabis Deliveries</title>
                <meta name="description" content="Solutions for Cannabis Deliveries" />
                <link rel="icon" type="image/png" href="/images/favicon.png"></link>
            </Helmet>
            <NavbarSaasLandingTwo selected='deliveries' />

            <MainBanner selected='deliveries' />

            <Services selected='deliveries' />

            <Features />

            <MobileApp selected='deliveries' />

            {/* <Pricing /> */}

            {/* <FunFacts /> */}

            <Testimonials />

            <Newsletter />
            
            <FooterSaasLandingTwo />
        </>
    )
}

export default SaasLanding2;