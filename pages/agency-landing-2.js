import React from 'react';
import NavbarAgencyLandingTwo from '../components/_App/NavbarAgencyLandingTwo';
import AboutUs from '../components/AgencyLandingTwo/AboutUs';
import CaseStudies from '../components/AgencyLandingTwo/CaseStudies';
import MainBanner from '../components/AgencyLandingTwo/MainBanner';
import Newsletter from '../components/AgencyLandingTwo/Newsletter';
import PricingPlan from '../components/AgencyLandingTwo/PricingPlan';
import Services from '../components/AgencyLandingTwo/Services';
import Team from '../components/AgencyLandingTwo/Team';
import Testimonials from '../components/AgencyLandingTwo/Testimonials';
import WorkProcess from '../components/AgencyLandingTwo/WorkProcess';
import FooterAgencyLandingTwo from '../components/_App/FooterAgencyLandingTwo';
import ContactUs from '../components/AgencyLandingTwo/ContactUs';

const AgencyLanding2 = () => {
    return (
        <>
            <NavbarAgencyLandingTwo />

            <MainBanner />

            <AboutUs />

            <Services />

            <WorkProcess />

            <CaseStudies />

            <Testimonials />

            <PricingPlan />

            <Team />

            <ContactUs />

            <Newsletter />
            
            <FooterAgencyLandingTwo />
        </>
    )
}

export default AgencyLanding2;