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
import WhyChooseUs from '../components/WhyChooseUs'
import FooterSaasLandingTwo from '../components/_App/FooterSaasLandingTwo';
import { Helmet } from 'react-helmet';
import ContactUs from '../components/ContactUs';

const SaasLanding2 = () => {
    return (
        <>
            <Helmet>
            <title>Weedzly Enterprise - Solutions for Cannabis Deliveries</title>
                <meta name="description" content="Solutions for Cannabis Deliveries" />

                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="manifest" href="/site.webmanifest" />
                <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
                <meta name="msapplication-TileColor" content="#da532c" />
                <meta name="theme-color" content="#ffffff" />

                {/* <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" /> */}


                <meta name="twitter:image:src" content="/images/favicon.png"/>
                <meta name="twitter:site" content="@weedzly"/>
                <meta name="twitter:card" content="summary_large_image"/>
                <meta name="twitter:title" content="Weedzly"/>
                <meta name="twitter:description" content="Solutions for Cannabis Deliveries"/>
                <meta property="og:image" content="/images/favicon.png"/> 
                <meta property="og:image:alt" content="Solutions for Cannabis Deliveries"/>
                <meta property="og:site_name" content="Weedzly"/>
                <meta property="og:type" content="object"/>
                <meta property="og:title" content="Weedzly"/>
                <meta property="og:url" content="https://www.weedzly.com"/>
                <meta property="og:description" content="Solutions for Cannabis Deliveries"/>
            </Helmet>
            <NavbarSaasLandingTwo selected='deliveries' />

            <MainBanner selected='deliveries' />

            <Services selected='deliveries' />

            <Features selected='deliveries'/>

            <MobileApp selected='deliveries' />

            <WhyChooseUs selected='deliveries' />

            <ContactUs /> 
            <Pricing /> 

            {/* <FunFacts /> */}

            {/* <Testimonials /> */}

            {/* <Newsletter /> */}
            
            <FooterSaasLandingTwo />
        </>
    )
}

export default SaasLanding2;