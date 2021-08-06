import React from 'react';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    loop:true,
    margin:10,
    nav:false,
    dots:false,
    autoplay:true,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
};

const TrustedClients = () => {
    const [display, setDisplay] = React.useState(false);

    React.useEffect(() => {
        setDisplay(true);
    }, [])
    return (
        <div className="trusted-company">
            <div className="container">
                <div className="section-title text-center">
                    <h2>My Clients</h2>
                    <p>This feature is essential for any mobile app, so make sure you have it! These types of notifications can directly alert your user.</p>
                </div>

                {display ? <OwlCarousel 
                    className="company-slider owl-carousel owl-theme"
                    {...options}
                >
                    <div className="company-items">
                        <img src="/images/personal-portfolio/portfolio-partner1.png" alt="company logo" />
                    </div>
                    <div className="company-items">
                        <img src="/images/personal-portfolio/portfolio-partner2.png" alt="company logo" />
                    </div>
                    <div className="company-items">
                        <img src="/images/personal-portfolio/portfolio-partner3.png" alt="company logo" />
                    </div>
                    <div className="company-items">
                        <img src="/images/personal-portfolio/portfolio-partner4.png" alt="company logo" />
                    </div>
                    <div className="company-items">
                        <img src="/images/personal-portfolio/portfolio-partner2.png" alt="company logo" />
                    </div>
                </OwlCarousel> : ''}
            </div>
        </div>
    )
}

export default TrustedClients;