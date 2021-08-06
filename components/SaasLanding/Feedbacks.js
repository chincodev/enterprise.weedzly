import React from 'react';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    items: 1,
    mouseDrag:false,
    touchDrag:false,
    navText:[
        "<i class='flaticon-left-arrow'></i>",
        "<i class='flaticon-right-arrow'></i>"
    ],
};

const Feedbacks = () => {
    const [display, setDisplay] = React.useState(false);

    React.useEffect(() => {
        setDisplay(true);
    }, [])
    return (
        <div id="testimonials" className="testimonial-section pt-70 pb-100">
            <div className="container-fluid">
                <div className="section-title">
                    <span>Testimonials</span>
                    <h2>People Quotes About Us</h2>
                    <p>We value what our valued clients and users have to say about us. We are always ready to improve and be at your service.</p>
                </div>

                <div className="row align-items-center">
                    <div className="col-lg-7">
                        <div className="testimonial-img">
                            <img src="/images/app-landing/app-map.png" alt="map image" />

                            <div className="client-img">
                                <img src="/images/app-landing/app-user1.png" alt="client image" />
                                <img src="/images/app-landing/app-user2.png" alt="client image" />
                                <img src="/images/app-landing/app-user3.png" alt="client image" />
                                <img src="/images/app-landing/app-user4.png" alt="client image" />
                                <img src="/images/app-landing/app-user5.png" alt="client image" />
                                <img src="/images/app-landing/app-user6.png" alt="client image" />
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-5">
                        {display ? <OwlCarousel 
                            className="testimonial-slider owl-carousel owl-theme"
                            {...options}
                        >
                            <div className="testimonial-item">
                                <img src="/images/app-landing/app-user4.png" alt="client image" />

                                <div className="client-info">
                                    <h3>John Doe</h3>
                                    <span>Traveler</span>
                                </div>
                                <p>I am enjoying this app so far. I was surprised that Shopify didn`t have a built-in function for something like this but glad your app fits the bill.</p>
                            </div>

                            <div className="testimonial-item">
                                <img src="/images/app-landing/app-user8.png" alt="client image" />

                                <div className="client-info">
                                    <h3>Harry</h3>
                                    <span>SEO Expert</span>
                                </div>
                                <p>I am enjoying this app so far. I was surprised that Shopify didn`t have a built-in function for something like this but glad your app fits the bill.</p>
                            </div>
                        </OwlCarousel> : ''}
                    </div>
                </div>

                <div className="testimonial-shape">
                    <img src="/images/shapes/shape1.png" alt="shape" />
                    <img src="/images/shapes/shape2.png" alt="shape" />
                    <img src="/images/shapes/shape3.png" alt="shape" />
                    <img src="/images/shapes/shape4.png" alt="shape" />
                    <img src="/images/shapes/shape5.png" alt="shape" />
                </div>
            </div>
        </div>
    )
}

export default Feedbacks;