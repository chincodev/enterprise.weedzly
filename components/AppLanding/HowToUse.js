import React from 'react';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    items:1,
    loop:true,
	nav: false,
	mouseDrag: false,
    touchDrag: false,
	dots: true,
	autoplay: true,
    autoplayHoverPause: true,
    
    responsive:{
        0:{
            items: 2,
            margin: 20,
        },
        600:{
            items: 3,
            margin: 20,
        },
        1000:{
            items: 1
        }
    }
};

const HowToUse = () => {
    const [display, setDisplay] = React.useState(false);

    React.useEffect(() => {
        setDisplay(true);
    }, [])
    return (
        <div className="how-use pt-100">
            <div className="container">
                <div className="section-title">
                    <span>How To Use?</span>
                    <h2>4 Simple Steps to Follow</h2>
                    <p>Here is a tutorial on how you can operate this app easily and effortlessly reserve your tickets for your awaited trip. Follow the given instruction.</p>
                </div>

                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-sm-6">
                                <div className="how-use-card how-card-one">
                                    <span>1</span>
                                    <i className="flaticon-setup"></i>
                                    <h3>Installation First</h3>
                                </div>
                            </div>
                            <div className="col-lg-6 col-sm-6">
                                <div className="pb-2">
                                    <p>Easily install the app in your device from the app store or download it online.</p>
                                </div>
                            </div>

                            <div className="col-lg-6 col-sm-6">
                                <div className="pb-2">
                                    <p>Give your identification and information in the app to help us recognize you.</p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-sm-6">
                                <div className="how-use-card how-card-two">
                                    <span>2</span>
                                    <i className="flaticon-settings"></i>
                                    <h3>Set Your Profile</h3>
                                </div>
                            </div>

                            <div className="col-lg-6 col-sm-6">
                                <div className="how-use-card how-card-three">
                                    <span>3</span>
                                    <i className="flaticon-destination"></i>
                                    <h3>Set Destination</h3>
                                </div>
                            </div>
                            <div className="col-lg-6 col-sm-6">
                                <div className="pb-2">
                                    <p>Type your destination and also put the date of when you want to leave for the destination.</p>
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-6 col-sm-6">
                                <div className="pb-2">
                                    <p>Finally, pay your bill and confirm your booking for the ticket and the ticket will be all yours.</p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-sm-6">
                                <div className="how-use-card how-card-four">
                                    <span>4</span>
                                    <i className="flaticon-ticket"></i>
                                    <h3>Book Your Ticket</h3>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-5 offset-lg-1">
                        {display ? <OwlCarousel 
                            className="how-use-slider owl-carousel owl-theme"
                            {...options}
                        >
                            <div className="how-use-img">
                                <img src="/images/app-landing/app-screenshot1.png" alt="iphone" />
                            </div>
                            <div className="how-use-img">
                                <img src="/images/app-landing/app-screenshot2.png" alt="iphone" />
                            </div>
                            <div className="how-use-img">
                                <img src="/images/app-landing/app-screenshot3.png" alt="iphone" />
                            </div>
                        </OwlCarousel> : ''}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HowToUse;