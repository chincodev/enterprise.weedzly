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
                                <h2>Live Menu in Minutes!</h2>
                                <p>With our system, you'll be up and running within minutes. Simply sign up, customize your profile, and hit the ground running with instant accesss to our library with more than 200,000 pre-built products. </p>
                            </div>

                            <ul>
                                <li>
                                    <i className="flaticon-check"></i>
                                    Add products with the click of a button
                                </li>
                                <li>
                                    <i className="flaticon-check"></i>
                                   Create custom products and add them to your menu
                                </li>
                                <li>
                                    <i className="flaticon-check"></i>
                                    Enable after-hour ordering, allowing customers to pre-order for when you reopen.
                                </li>
                                {/* <li>
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
                                </li> */}
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