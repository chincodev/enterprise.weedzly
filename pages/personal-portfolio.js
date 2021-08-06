import React from 'react';
import NavbarPersonalPortfolio from '../components/_App/NavbarPersonalPortfolio';
import MainBanner from '../components/PersonalPortfolio/MainBanner';
import About from '../components/PersonalPortfolio/About';
import Services from '../components/PersonalPortfolio/Services';
import Skills from '../components/PersonalPortfolio/Skills';
import Showcase from '../components/PersonalPortfolio/Showcase';
import TrustedClients from '../components/PersonalPortfolio/TrustedClients';
import Testimonials from '../components/PersonalPortfolio/Testimonials';
import ContactUs from '../components/PersonalPortfolio/ContactUs';
import FooterPersonalPortfolio from '../components/_App/FooterPersonalPortfolio';
 
const PersonalPortfolio = () => {
    return (
        <>
            <NavbarPersonalPortfolio />

            <MainBanner />

            <About />

            <Services />

            <Skills />

            <Showcase />

            <TrustedClients />

            <Testimonials />

            <ContactUs />
            
            <FooterPersonalPortfolio />
        </>
    )
}

export default PersonalPortfolio;