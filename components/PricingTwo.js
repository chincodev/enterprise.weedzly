import React from 'react';
import Link from 'next/link';

const PricingTwo = () => {
    return (
        <div id="pricing" className="pricing-section price-style-two">
            <div className="container">
                <div className="section-title">
                    <h2>Pricing for Dispensaries</h2>
                    {/* <p>A comment is something that you say which expresses your opinion of something or which gives an explanation of it. If an event or situation.</p> */}
                </div>
                <div className="row">
                    <div className="offset-lg-2 col-lg-4 c col-md-6">
                        <div className="price-card">
                            <div className="price">
                                <h3>$99 <span>/ Month</span></h3>
                                <p>Dispensary Basic</p>
                            </div>

                            <div className="price-feature">
                                <ul>
                                    <li>
                                        <i className="flaticon-check"></i>
                                        Dispensary Listing
                                    </li>
                                    <li>
                                        <i className="flaticon-check"></i>
                                        Point of Sale system
                                    </li>
                                    <li>
                                        <i className="flaticon-check"></i>
                                        Promotional placements sitewide
                                    </li>
                                    <li>
                                        <i className="flaticon-check"></i>
                                        Loyalty rewards system
                                    </li>
                                    <li>
                                        <i className="flaticon-check"></i>
                                        Customer Online Ordering system
                                    </li>
                                </ul>
                            </div>

                            <div className="price-btn">
                                <Link href="/register">
                                    <a>Get Started</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="price-card business-className active-price">
                            <div className="price">
                                <h3>$299 <span>/ Month</span></h3>
                                <p>Dispensary Premium</p>
                            </div>

                            <div className="price-feature">
                                <ul>
                                    <li>
                                        <i className="flaticon-check"></i>
                                        Everything from the basic plan
                                    </li>
                                    <li>
                                        <i className="flaticon-check"></i>
                                        iOS & Android customer apps
                                    </li>
                                    <li>
                                        <i className="flaticon-check"></i>
                                        SEO optimized website
                                    </li>
                                </ul>
                            </div>

                            <div className="price-btn">
                                <Link href="/register">
                                    <a>Get Started</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="price-shape">
                <img src="/images/saas-landing/saas-shape8.png" alt="shap" />
                <img src="/images/saas-landing/saas-shape9.png" alt="shap" />
                <img src="/images/saas-landing/saas-shape10.png" alt="shap" />
                <img src="/images/saas-landing/saas-shape9.png" alt="shap" />
            </div>
        </div>
    )
}

export default PricingTwo;