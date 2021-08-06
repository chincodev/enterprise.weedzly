import React from 'react';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    items: 1,
    loop: true,
    margin: 10,
    nav: true,
    dots:false,
    mouseDrag:false,
    touchDrag:false,
    navText:[
        "<i class='flaticon-left-arrow'></i>",
        "<i class='flaticon-right-arrow'></i>"
    ],
};

const Testimonials = () => {
    const [display, setDisplay] = React.useState(false);

    React.useEffect(() => {
        setDisplay(true);
    }, [])
    return (
        <div id="testimonials" className="testimonial-style-two pt-70 pb-100">
            <div className="container">
                <div className="section-title">
                    <h2>People Quotes About Us</h2>
                    <p>A comment is something that you say which expresses your opinion of something or which gives an explanation of it. If an event or situation.</p>
                </div>

                <div className="row">
                    <div className="col-lg-7 offset-lg-3">
                        {display ? <OwlCarousel 
                            className="testimonial-slider-area owl-carousel owl-theme"
                            {...options}
                        >
                            <div className="testimonial-items">
                                <div className="client-info">
                                    <img src="/images/saas-landing/saas-user1.png" alt="client" />
                                    <h6>John Doe</h6>
                                    <p>Treaveller</p>
                                </div>
                                <p className="client-text">“I am really enjoying this app so far. I was sur rised that Shopify didn`t have a built in func ion for something like this.”</p>
                            </div>

                            <div className="testimonial-items">
                                <div className="client-info">
                                    <img src="/images/saas-landing/saas-user2.png" alt="client" />
                                    <h6>Alice</h6>
                                    <p>Developer</p>
                                </div>
                                <p className="client-text">“I am really enjoying this app so far. I was sur rised that Shopify didn`t have a built in func ion for something like this.”</p>
                            </div>
                        </OwlCarousel> : ''}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials;