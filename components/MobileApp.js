import React from 'react';
import Link from 'next/link';

const MobileApp = () => {
    return (
        <div className="keep-update">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-7">
                        <div className="keep-updating-text">
                            <div className="section-title text-left">
                                <h2>Deliveries Made Easy</h2>
                            </div>
                            <p>In the age of convenience, your potential customers want to press the “easy” button that lets them find a cannabis provider to fit into their lifestyle. With a single click, your shoppers can have their goodies delivered, right from the palm of their hand. As a result, your revenue can grow exponentially. Bottom line? We take the stress and guesswork out of serving your customers, so you can focus on growing your brand.</p>

                            <div className="keep-btn">
                                <a href="https://play.google.com/store/apps" className="active" target="_blank">
                                    <i className="flaticon-play-store"></i>
                                    <p>Get It on</p>
                                    <h5>Get Started</h5>
                                </a>
                                {/* <a href="https://www.apple.com/app-store/" target="_blank">
                                    <i className="flaticon-app-store"></i>
                                    <p>Available on the</p>
                                    <h5>App Store</h5>
                                </a> */}
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="keep-img">
                            <img src="/images/saas-landing/saas-iphone-two.png" alt="iphone" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="keep-shape">
                <img src="/images/saas-landing/saas-shape5.png" alt="shape" />
            </div>
        </div>
    )
}

export default MobileApp;