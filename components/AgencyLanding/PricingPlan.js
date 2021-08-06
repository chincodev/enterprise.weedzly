import React from 'react';
import Link from 'next/link';

const PricingPlan = () => {
    return (
        <div id="pricing" className="pricing-section price-style-three pt-100 pb-70">
            <div className="container">
                <div className="section-title">
                    <span>Pricing Plan</span>
                    <h2>Get Your Affordable Pricing Plan</h2>
                    <p>We have the perfect plans for your given budgets. That’s why we brought you three kinds of price planning.</p>
                </div>  

                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className="price-card">
                            <div className="price-heading">
                                <h3>Personal Pack</h3>
                                <h2>$12 <span>/ Month</span></h2>
                            </div>

                            <div className="price-feature">
                                <ul>
                                    <li>
                                        <i className="flaticon-check"></i>
                                        Limited Trips
                                    </li>
                                    <li>
                                        <i className="flaticon-check"></i>
                                        Available Trip History
                                    </li>
                                    <li>
                                        <i className="flaticon-check"></i>
                                        Only 1 offer/month
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
                                        Trip Cancellation
                                    </li>
                                    <li>
                                        <i className="flaticon-signal"></i>
                                        Money Return
                                    </li>
                                </ul>
                            </div>

                            <div className="price-btn">
                                <Link href="#">
                                    <a>Get Started</a>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="price-card active business-className">
                            <div className="price-heading">
                                <h3>Business Class</h3>
                                <h2>$35 <span>/ Month</span></h2>
                            </div>

                            <div className="price-feature">
                                <ul>
                                    <li>
                                        <i className="flaticon-check"></i>
                                        Limited Trips
                                    </li>
                                    <li>
                                        <i className="flaticon-check"></i>
                                        Available Trip History
                                    </li>
                                    <li>
                                        <i className="flaticon-check"></i>
                                        Only 1 offer/month
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
                                        Trip Cancellation
                                    </li>
                                    <li>
                                        <i className="flaticon-signal"></i>
                                        Money Return
                                    </li>
                                </ul>
                            </div>

                            <div className="price-btn">
                                <Link href="#">
                                    <a>Get Started</a>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 offset-md-3 offset-lg-0">
                        <div className="price-card premium">
                            <div className="price-heading">
                                <h3>Premium</h3>
                                <h2>$50 <span>/ Month</span></h2>
                            </div>

                            <div className="price-feature">
                                <ul>
                                    <li>
                                        <i className="flaticon-check"></i>
                                        Limited Trips
                                    </li>
                                    <li>
                                        <i className="flaticon-check"></i>
                                        Available Trip History
                                    </li>
                                    <li>
                                        <i className="flaticon-check"></i>
                                        Only 1 offer/month
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
                                        Trip Cancellation
                                    </li>
                                    <li>
                                        <i className="flaticon-check"></i>
                                        Money Return
                                    </li>
                                </ul>
                            </div>

                            <div className="price-btn">
                                <Link href="#">
                                    <a>Get Started</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PricingPlan;