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
                <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png"/>
                <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png"/>
                <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png"/>
                <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png"/>
                <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png"/>
                <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png"/>
                <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png"/>
                <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png"/>
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png"/>
                <link rel="icon" type="image/png" sizes="192x192"  href="/android-icon-192x192.png"/>
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
                <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png"/>
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
                <link rel="manifest" href="/manifest.json"/>
                <meta name="msapplication-TileColor" content="#ffffff"/>
                <meta name="msapplication-TileImage" content="/ms-icon-144x144.png"/>
                <meta name="theme-color" content="#ffffff"/>
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

            {/* <Pricing /> */}

            {/* <FunFacts /> */}

            <Testimonials />

            <Newsletter />
            
            <FooterSaasLandingTwo />
        </>
    )
}

export default SaasLanding2;