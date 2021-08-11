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
                                <h2>Deliveries Made Simple</h2>
                            </div>
                            <p>In today's digital age, customers want to press the "easy" button that lets them easily find a cannabis business that fits their needs. When listed,potential customers will be able to find your business and place an order with the click of a few buttons. We want to help grow your revenue and take the guesswork out of serving your customers, so your can focus on growing your business.</p>

                            <div className="keep-btn">
                                <a href="https://play.google.com/store/apps" className="active" target="_blank">
                                    <i className="flaticon-play-store"></i>
                                    {/* <p>Contact Us</p> */}
                                    <h5>Get Started Today</h5>
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