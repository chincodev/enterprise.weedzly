import React from 'react';
import NavbarAgencyLanding from '../components/_App/NavbarAgencyLanding';
import MainBanner from '../components/AgencyLanding/MainBanner';
import AboutUs from '../components/AgencyLanding/AboutUs';
import Services from '../components/AgencyLanding/Services';
import WorkingProcess from '../components/AgencyLanding/WorkingProcess';
import CaseStudies from '../components/AgencyLanding/CaseStudies';
import Testimonials from '../components/AgencyLanding/Testimonials';
import PricingPlan from '../components/AgencyLanding/PricingPlan';
import Team from '../components/AgencyLanding/Team';
import ContactUs from '../components/AgencyLanding/ContactUs';
import Newsletter from '../components/AgencyLanding/Newsletter';
import FooterAgencyLanding from '../components/_App/FooterAgencyLanding';

const AgencyLanding = () => {
    return (
        <>
            <NavbarAgencyLanding />

            <MainBanner />

            <AboutUs />

            <Services />
            
            <WorkingProcess />

            <CaseStudies />

            <Testimonials />

            <PricingPlan />

            <Team />

            <ContactUs />

            <Newsletter />
            
            <FooterAgencyLanding />
        </>
    )
}

export default AgencyLanding;