import React from 'react';
import Link from 'next/link';

const Pricing = () => {
    return (
        <div id="pricing" className="pricing-section price-style-two">
            <div className="container">
                <div className="section-title">
                    <h2>Choose Your Affordable Price Plan</h2>
                    <p>A comment is something that you say which expresses your opinion of something or which gives an explanation of it. If an event or situation.</p>
                </div>
                
                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className="price-card">
                            <div className="price">
                                <h3>$30 <span>/ Month</span></h3>
                                <p>Basic Account</p>
                            </div>

                            <div className="price-feature">
                                <ul>
                                    <li>
                                        <i className="flaticon-check"></i>
                                        Limited Access
                                    </li>
                                    <li>
                                        <i className="flaticon-check"></i>
                                        Available History
                                    </li>
                                    <li>
                                        <i className="flaticon-check"></i>
                                        Only One offer/month
                                    </li>
                                    <li>
                                        <i className="flaticon-check"></i>
                                        Special Discount
                                    </li>
                                    <li>
                                        <i className="flaticon-signal"></i>
                                        No Free Trip
                                    </li>
                                    <li>
                                        <i className="flaticon-signal"></i>
                                        Membership Card
                                    </li>
                                    <li>
                                        <i className="flaticon-signal"></i>
                                        24/7 Support
                                    </li>
                                    <li>
                                        <i className="flaticon-signal"></i>
                                        Home Service
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
                                <h3>$50 <span>/ Month</span></h3>
                                <p>Business Class</p>
                            </div>

                            <div className="price-feature">
                                <ul>
                                    <li>
                                        <i className="flaticon-check"></i>
                                        Limited Access
                                    </li>
                                    <li>
                                        <i className="flaticon-check"></i>
                                        Available History
                                    </li>
                                    <li>
                                        <i className="flaticon-check"></i>
                                        Only One offer/month
                                    </li>
                                    <li>
                                        <i className="flaticon-check"></i>
                                        Special Discount
                                    </li>
                                    <li>
                                        <i className="flaticon-check"></i>
                                        No Free Trip
                                    </li>
                                    <li>
                                        <i className="flaticon-check"></i>
                                        Membership Card
                                    </li>
                                    <li>
                                        <i className="flaticon-signal"></i>
                                        24/7 Support
                                    </li>
                                    <li>
                                        <i className="flaticon-signal"></i>
                                        Home Service
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

                    <div className="col-lg-4 col-md-6 offset-md-3 offset-lg-0">
                        <div className="price-card premium">
                            <div className="price">
                                <h3>$100 <span>/ Month</span></h3>
                                <p>Premium</p>
                            </div>

                            <div className="price-feature">
                                <ul>
                                    <li>
                                        <i className="flaticon-check"></i>
                                        Limited Access
                                    </li>
                                    <li>
                                        <i className="flaticon-check"></i>
                                        Available History
                                    </li>
                                    <li>
                                        <i className="flaticon-check"></i>
                                        Only One offer/month
                                    </li>
                                    <li>
                                        <i className="flaticon-check"></i>
                                        Special Discount
                                    </li>
                                    <li>
                                        <i className="flaticon-check"></i>
                                        No Free Trip
                                    </li>
                                    <li>
                                        <i className="flaticon-check"></i>
                                        Membership Card
                                    </li>
                                    <li>
                                        <i className="flaticon-check"></i>
                                        24/7 Support
                                    </li>
                                    <li>
                                        <i className="flaticon-check"></i>
                                        Home Service
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

export default Pricing;