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
                <title>Weedzly Enterprise - Solutions for Cannabis Brands</title>
                <meta name="description" content="Solutions for Cannabis Brands" />
                <link rel="icon" type="image/png" href="/images/favicon.png"></link>
            </Helmet>
            <NavbarSaasLandingTwo selected='brands' />

            <MainBanner selected='brands' />

            <Services selected='brands'  />

            <Features />

            <MobileApp selected='brands' />

            {/* <Pricing /> */}

            {/* <FunFacts /> */}

            <Testimonials />

            <Newsletter />
            
            <FooterSaasLandingTwo />
        </>
    )
}

export default SaasLanding2;