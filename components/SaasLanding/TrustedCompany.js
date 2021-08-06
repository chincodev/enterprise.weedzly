import React from 'react';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    loop: true,
    margin: 10,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayHoverPause: true,

    responsive:{
        0:{
            items: 2
        },
        600:{
            items: 3
        },
        1000:{
            items: 5
        }
    }
};

const TrustedCompany = () => {
    const [display, setDisplay] = React.useState(false);

    React.useEffect(() => {
        setDisplay(true);
    }, [])
    return (
        <div className="trusted-company mt-50">
            <div className="container">
                <div className="section-title text-center">
                    <span>Trusted Companies</span>
                    <h2>750+ Companies Trusted Us</h2>
                </div>

                {display ? <OwlCarousel 
                    className="company-slider owl-carousel owl-theme"
                    {...options}
                >
                    <div className="company-items">
                        <img src="/images/saas-landing/saas-partner1.png" alt="company logo" />
                    </div>
                    <div className="company-items">
                        <img src="/images/saas-landing/saas-partner2.png" alt="company logo" />
                    </div>
                    <div className="company-items">
                        <img src="/images/saas-landing/saas-partner3.png" alt="company logo" />
                    </div>
                    <div className="company-items">
                        <img src="/images/saas-landing/saas-partner4.png" alt="company logo" />
                    </div>
                    <div className="company-items">
                        <img src="/images/saas-landing/saas-partner3.png" alt="company logo" />
                    </div>
                </OwlCarousel> : ''}
            </div>
        </div>
    )
}

export default TrustedCompany;