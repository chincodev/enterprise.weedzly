import React from 'react';
import NavbarSaasLanding from '../components/_App/NavbarSaasLanding';
import MainBanner from '../components/SaasLanding/MainBanner';
import TrustedCompany from '../components/SaasLanding/TrustedCompany';
import OurServices from '../components/SaasLanding/OurServices';
import WhyChooseUs from '../components/SaasLanding/WhyChooseUs';
import BuildWithStandardCode from '../components/SaasLanding/BuildWithStandardCode';
import MobileApps from '../components/SaasLanding/MobileApps';
import FunFacts from '../components/SaasLanding/FunFacts';
import Pricing from '../components/SaasLanding/Pricing';
import Feedbacks from '../components/SaasLanding/Feedbacks';
import Newsletter from '../components/SaasLanding/Newsletter';
import FooterSaasLanding from '../components/_App/FooterSaasLanding';

const SaasLanding = () => {
    return (
        <>
            <NavbarSaasLanding />

            <MainBanner /> 

            <TrustedCompany /> 

            <OurServices />

            <WhyChooseUs />

            <BuildWithStandardCode />

            <MobileApps />

            <FunFacts />

            <Pricing />

            <Feedbacks />

            <Newsletter />
            
            <FooterSaasLanding />
        </>
    )
}

export default SaasLanding;