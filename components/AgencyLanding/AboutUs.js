import React from 'react';
import Link from 'next/link';

const AboutUs = () => {
    return (
        <div id="about" className="about-us-section pt-100">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="about-image text-center">
                            <img src="/images/creative-agency/agency-about.png" alt="about image" />
                        </div>
                    </div>
                    
                    <div className="col-lg-6">
                        <div className="about-text">
                            <div className="section-title text-left">
                                <span>About Us</span>
                                <h2>Best Online Service Provider</h2>
                            </div>

                            <p>Constructing a secure environment to bring the best of innovative and unique business involving your business. Our team of experts is always ready to give you the very best service. Manage your business online with our help</p>

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
                                    7 Years of Experience
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