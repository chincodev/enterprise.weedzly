import React from 'react';
import Link from 'next/link';

const Features = () => {
    return (
        <div id="features" className="features-style-two pt-70 pb-100">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="feature-image">
                            <img src="/images/saas-landing/saas-laptop.png" alt="laptop" />
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="feature-text">
                            <div className="section-title text-left">
                                <h2>Live Menu in Just Minutes!</h2>
                                <p>Ready to kickstart your Cannabis business and start raking in results ASAP? Our system gets you up and running faster than any other platform on the market. Simply sign up, customize your profile and hit the ground running with instant access to our library to more than 200,000 pre-built products. No hassle, no waiting period, just immediate access to the tools you need.</p>
                            </div>

                            <ul>
                                <li>
                                    <i className="flaticon-check"></i>
                                    Clean User Interface
                                </li>
                                <li>
                                    <i className="flaticon-check"></i>
                                   Easy To Use
                                </li>
                                <li>
                                    <i className="flaticon-check"></i>
                                    Best Performance
                                </li>
                                <li>
                                    <i className="flaticon-check"></i>
                                    24/7 Support
                                </li>
                                <li>
                                    <i className="flaticon-check"></i>
                                    Free New Updates
                                </li>
                                <li>
                                    <i className="flaticon-check"></i>
                                    Strong Secured Data Storage
                                </li>
                            </ul>

                            <div className="feature-btn">
                                <Link href="#">
                                    <a>Get Started</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="featues-shape">
                <img src="/images/saas-landing/saas-shape4.png" alt="shape" />
            </div>
        </div>
    )
}

export default Features;