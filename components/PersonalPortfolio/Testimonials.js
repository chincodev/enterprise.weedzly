import React from 'react';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    loop: true,
    nav: true,
    dots: false,
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
        <div id="testimonials" className="testimonial-style-three ptb-100">
            <div className="container">
                <div className="section-title">
                    <h2>Peoples Quotes About Me</h2>
                    <p>App Store and Google Play Store gift cards are interchangeable, so no matter which one you received  you can use the credit for apps.</p>
                </div>
           
                <div className="testimonial-area">
                    {display ? <OwlCarousel 
                        className="testimonial-text-slider owl-carousel owl-theme"
                        {...options}
                    >
                        <div className="sin-testiText">
                            <img src="/images/personal-portfolio/portfolio-client1.png" alt="client image" />
                            <h2>John Doe</h2>
                            <span>Treaveller</span>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>

                        <div className="sin-testiText">
                            <img src="/images/personal-portfolio/portfolio-client2.png" alt="client image" />
                            <h2>Alice</h2>
                            <span>UX Designer</span>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                        
                        <div className="sin-testiText">
                            <img src="/images/personal-portfolio/portfolio-client3.png" alt="client image" />
                            <h2>Caroline</h2>
                            <span>analyst</span>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                        
                        <div className="sin-testiText">
                            <img src="/images/personal-portfolio/portfolio-client4.png" alt="client image" />
                            <h2>Eddey</h2>
                            <span>Treaveller</span>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                        
                        <div className="sin-testiText">
                            <img src="/images/personal-portfolio/portfolio-client5.png" alt="client image" />
                            <h2>William</h2>
                            <span>SEO Expert</span>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                        
                        <div className="sin-testiText">
                            <img src="/images/personal-portfolio/portfolio-client6.png" alt="client image" />
                            <h2>Smith</h2>
                            <span>Editor</span>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                    </OwlCarousel> : ''}
                </div>
            </div>
        </div>
    )
}

export default Testimonials;