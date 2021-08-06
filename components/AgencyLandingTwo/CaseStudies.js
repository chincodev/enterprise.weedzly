import React from 'react';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    loop:true,
    margin:30,
    nav:false,
    dots:true,
    stagePadding:20,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
};

const CaseStudies = () => {
    const [display, setDisplay] = React.useState(false);

    React.useEffect(() => {
        setDisplay(true);
    }, [])
    return (
        <div id="case-study" className="case-study-section pt-100">
            <div className="container-fluid">
                <div className="section-title">
                    <span>Case Studies</span>
                    <h2>Some Great Works by Us</h2>
                    <p>We have done some great works for our clients. Here are some of our awesome works that took our client’s business to the top.</p>
                </div>

                {display ? <OwlCarousel 
                    className="case-study-slider owl-carousel owl-theme"
                    {...options}
                >
                    <div className="case-items">
                        <div className="case-img">
                            <img src="/images/creative-agency/agency-case-study1.png" alt="case study image" />

                            <div className="project-logo">
                                <div className="d-table">
                                    <div className="d-table-cell">
                                        <img src="/images/creative-agency/agency-logo1.png" alt="logo" />
                                    </div>
                                </div>                
                            </div>
                        </div>

                        <div className="case-study-text">
                            <h3><a href="#" target="_blank">Ride Share App</a></h3>
                            <p>We have created an app with incorporation with the ideas of our client. With the help of this app, you can go to places that are cheaper than using a cab.</p>
                        </div>
                    </div>

                    <div className="case-items">
                        <div className="case-img">
                            <img src="/images/creative-agency/agency-case-study2.png" alt="case study image" />

                            <div className="project-logo">
                                <div className="d-table">
                                    <div className="d-table-cell">
                                        <img src="/images/creative-agency/agency-logo2.png" alt="logo" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="case-study-text">
                            <h3><a href="#" target="_blank">Rocket - New Marketing</a></h3>
                            <p>We helped a digital agency to grow its business with great strategy web designs and development. They help to grow your position in the market.</p>
                        </div>
                    </div>

                    <div className="case-items">
                        <div className="case-img">
                            <img src="/images/creative-agency/agency-case-study3.png" alt="case study image" />

                            <div className="project-logo">
                                <div className="d-table">
                                    <div className="d-table-cell">
                                        <img src="/images/creative-agency/agency-logo3.png" alt="logo" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="case-study-text">
                            <h3><a href="#" target="_blank">Freelancing Marketing</a></h3>
                            <p>Freelance marketers are enabling firms and companies to sell their products efficiently. They help their clients to a create a website/business platform.</p>
                        </div>
                    </div>

                    <div className="case-items">
                        <div className="case-img">
                            <img src="/images/creative-agency/agency-case-study1.png" alt="case study image" />

                            <div className="project-logo">
                                <div className="d-table">
                                    <div className="d-table-cell">
                                        <img src="/images/creative-agency/agency-logo1.png" alt="logo" />
                                    </div>
                                </div>                
                            </div>
                        </div>

                        <div className="case-study-text">
                            <h3><a href="#" target="_blank">Ride Share App</a></h3>
                            <p>We have created an app with incorporation with the ideas of our client. With the help of this app, you can go to places that are cheaper than using a cab.</p>
                        </div>
                    </div>

                    <div className="case-items">
                        <div className="case-img">
                            <img src="/images/creative-agency/agency-case-study2.png" alt="case study image" />

                            <div className="project-logo">
                                <div className="d-table">
                                    <div className="d-table-cell">
                                        <img src="/images/creative-agency/agency-logo2.png" alt="logo" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="case-study-text">
                            <h3><a href="#" target="_blank">Rocket - New Marketing</a></h3>
                            <p>We helped a digital agency to grow its business with great strategy web designs and development. They help to grow your position in the market.</p>
                        </div>
                    </div>

                    <div className="case-items">
                        <div className="case-img">
                            <img src="/images/creative-agency/agency-case-study3.png" alt="case study image" />

                            <div className="project-logo">
                                <div className="d-table">
                                    <div className="d-table-cell">
                                        <img src="/images/creative-agency/agency-logo3.png" alt="logo" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="case-study-text">
                            <h3><a href="#" target="_blank">Freelancing Marketing</a></h3>
                            <p>Freelance marketers are enabling firms and companies to sell their products efficiently. They help their clients to a create a website/business platform.</p>
                        </div>
                    </div>

                    <div className="case-items">
                        <div className="case-img">
                            <img src="/images/creative-agency/agency-case-study1.png" alt="case study image" />

                            <div className="project-logo">
                                <div className="d-table">
                                    <div className="d-table-cell">
                                        <img src="/images/creative-agency/agency-logo1.png" alt="logo" />
                                    </div>
                                </div>                
                            </div>
                        </div>

                        <div className="case-study-text">
                            <h3><a href="#" target="_blank">Ride Share App</a></h3>
                            <p>We have created an app with incorporation with the ideas of our client. With the help of this app, you can go to places that are cheaper than using a cab.</p>
                        </div>
                    </div>

                    <div className="case-items">
                        <div className="case-img">
                            <img src="/images/creative-agency/agency-case-study2.png" alt="case study image" />

                            <div className="project-logo">
                                <div className="d-table">
                                    <div className="d-table-cell">
                                        <img src="/images/creative-agency/agency-logo2.png" alt="logo" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="case-study-text">
                            <h3><a href="#" target="_blank">Rocket - New Marketing</a></h3>
                            <p>We helped a digital agency to grow its business with great strategy web designs and development. They help to grow your position in the market.</p>
                        </div>
                    </div>

                    <div className="case-items">
                        <div className="case-img">
                            <img src="/images/creative-agency/agency-case-study3.png" alt="case study image" />

                            <div className="project-logo">
                                <div className="d-table">
                                    <div className="d-table-cell">
                                        <img src="/images/creative-agency/agency-logo3.png" alt="logo" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="case-study-text">
                            <h3><a href="#" target="_blank">Freelancing Marketing</a></h3>
                            <p>Freelance marketers are enabling firms and companies to sell their products efficiently. They help their clients to a create a website/business platform.</p>
                        </div>
                    </div>
                </OwlCarousel> : ''}
            </div>
        </div>
    )
}

export default CaseStudies;