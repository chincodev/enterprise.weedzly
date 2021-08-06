import React from 'react';
import Link from 'next/link';

const WhyChooseUs = () => {
    return (
        <div className="why-choose pt-100">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-4">
                        <div className="why-choose-img">
                            <img src="/images/app-landing/app-feature.png" alt="why choose image" />
                        </div>
                    </div>

                    <div className="col-lg-7 offset-lg-1">
                        <div className="why-choose-text">
                            <div className="section-title">
                                <span>Why Choose Us?</span>
                                <h2>We are Providing Best facilities!</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>

                            <div className="media">
                                <i className="flaticon-computer mr-3"></i>
                                <div className="media-body">
                                    <h3 className="mt-0">Clean User Interface</h3>
                                    The app is easy to handle and understand. You will not have to wonder much and just jump to booking your destination ticket.
                                </div>
                            </div>

                            <div className="media">
                                <i className="flaticon-cinema mr-3"></i>
                                <div className="media-body">
                                    <h3 className="mt-0">Comfort Booking</h3>
                                    Don’t worry just book your tickets ahead of time or instantly while sipping a coffee or while taking a walking. The app is easily manageable.
                                </div>
                            </div>

                            <div className="media">
                                <i className="flaticon-late mr-3"></i>
                                <div className="media-body">
                                    <h3 className="mt-0">Time-Saving</h3>
                                    We know how hectic life can be. Book the ticket for your target destination with Plexi within a second. Take the extra time to pack properly.
                                </div>
                            </div>

                            <div className="media">
                                <i className="flaticon-wallet mr-3"></i>
                                <div className="media-body">
                                    <h3 className="mt-0">Online Payment</h3>
                                    We accept online payment. Manage your trip without the hassle of buying the ticket in person or paying for it in cash. Just transfer the money online.
                                </div>
                            </div>

                            <div className="why-choose-btn">
                                <Link href="#">
                                    <a className="active">
                                        <i className="flaticon-play-store"></i>
                                        <p>Get It on</p>
                                        <h5>Google Play</h5>
                                    </a>
                                </Link>

                                <Link href="#">
                                    <a>
                                        <i className="flaticon-app-store"></i>
                                        <p>Available on the</p>
                                        <h5>App Store</h5>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhyChooseUs;