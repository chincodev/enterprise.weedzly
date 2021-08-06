import React from 'react';
import Link from 'next/link';

const AboutUs = () => {
    return (
        <div id="about" className="about-us-section about-style-two pt-100">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="about-image text-center">
                            <img src="/images/creative-agency/agency-about-two.png" alt="about image" />
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="about-text">
                            <div className="section-title text-left">
                                <span>About Us</span>
                                <h2>We Provide Excellent Business Solutions</h2>
                            </div>

                            <p>Plexi is here to provide you with the best experience of creating a great venture. We help you to run your business with minimal tension.</p>

                            <ul>
                                <li>
                                    <i className="flaticon-check"></i>
                                    Creative Agency
                                </li>
                                <li>
                                    <i className="flaticon-check"></i>
                                    100% Trusted
                                </li>
                                <li>
                                    <i className="flaticon-check"></i>
                                    7 Years Experience
                                </li>
                                <li>
                                    <i className="flaticon-check"></i>
                                    Top Ranking Agency
                                </li>
                                <li>
                                    <i className="flaticon-check"></i>
                                    Best Support
                                </li>
                            </ul>

                            <div className="about-btn">
                                <Link href="#">
                                    <a>Get Started</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="about-shape">
                <img src="/images/map-two.png" alt="about shape" />
            </div>
        </div>
    )
}

export default AboutUs;