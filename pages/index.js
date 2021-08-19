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
import ContactUs from '../components/ContactUs';
import { dispensariesText } from '../content/text'

export default function Home() {
    return (
        <>
            <NavbarSaasLandingTwo selected='dispensaries' />

            <MainBanner content={dispensariesText.MainBanner} selected='dispensaries' />

            <Services content={dispensariesText.Services} selected='dispensaries' />

            <Features content={dispensariesText.Features} />

            <MobileApp content={dispensariesText.MobileApp} selected='dispensaries' />

            {/* <Pricing /> */}

            {/* <FunFacts /> */}

            <ContactUs content={dispensariesText.ContactUs} /> 

            {/* <Testimonials content={dispensariesText.Testimonials} /> */}

            <Newsletter content={dispensariesText.Newsletter} />
            
            <FooterSaasLandingTwo />
        </>
    )
}


export async function getServerSideProps(context){
    return {
        props: {}
    } 
}
