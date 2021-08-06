import React from 'react';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    loop:true,
    margin:10,
    nav:true,
    dots:false,
    mouseDrag:false,
    touchDrag:false,
    items:1,
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
        <div id="testimonials" className="testimonial-style-four pt-100">
            <div className="container">
                <div className="section-title">
                    <span>Testimonials</span>
                    <h2>People Quotes About Us</h2>
                    <p>A comment is something that you say which expresses your opinion of something or which gives an explanation of it. If an event or situation.</p>
                </div>

                <div className="row">
                    <div className="col-lg-7 offset-lg-2">
                        {display ? <OwlCarousel 
                            className="testimonial-slider-wrapper owl-carousel owl-theme"
                            {...options}
                        >
                            <div className="tsetimonial-card">
                                <img src="/images/creative-agency/agency-user1.png" alt="client" />
                                <h3>John Doe</h3>
                                <span>Treaveller</span>
                                <p>I am really enjoying this app so far. I was surprised that Shopify didn`t have a built in function for something like this, but glad your app fits the bill.</p>
                            </div>

                            <div className="tsetimonial-card">
                                <img src="/images/creative-agency/agency-user2.png" alt="client" />
                                <h3>Jack</h3>
                                <span>Consultant</span>
                                <p>I am really enjoying this app so far. I was surprised that Shopify didn`t have a built in function for something like this, but glad your app fits the bill.</p>
                            </div>
                        </OwlCarousel> : ''}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials;