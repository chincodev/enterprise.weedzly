import React from 'react';

const MobileApps = () => {
    return (
        <div id="apps" className="our-apps ptb-100">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-5">
                        <div className="our-apps-img">
                            <img src="/images/saas-landing/saas-iphone.png" alt="iphone" />
                        </div>
                    </div>

                    <div className="col-lg-7">
                        <div className="our-apps-text">
                            <div className="section-title text-left">
                                <span>Our Mobile Apps</span>
                                <h2>Also Available on Your Phone</h2>
                            </div>

                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                            <div className="our-apps-btn">
                                <a href="#" className="active">
                                    <i className="flaticon-play-store"></i>
                                    <p>Get It on</p>
                                    <h5>Google Play</h5>
                                </a>

                                <a href="#">
                                    <i className="flaticon-app-store"></i>
                                    <p>Available on the</p>
                                    <h5>App Store</h5>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="apps-shape">
                <img src="/images/shapes/shape1.png" alt="shape" />
                <img src="/images/shapes/shape3.png" alt="shape" />
                <img src="/images/shapes/shape5.png" alt="shape" />
                <img src="/images/shapes/shape6.png" alt="shape" />
                <img src="/images/map-two.png" alt="shape" />
            </div>
        </div>
    )
}

export default MobileApps;