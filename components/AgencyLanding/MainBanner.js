import React from 'react';
import Link from 'next/link';

const MainBanner = () => {
    return (
        <div id="home" className="main-banner banner-style-three banner-bg-four">
            <div className="d-table">
                <div className="d-table-cell">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <div className="banner-text">
                                    <h1>The Best Creative Agency</h1>

                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
        
                                    <div className="banner-btn">
                                        <a href="#" className="active">Get Started</a>
                                        <a href="#">Contact Us</a>     
                                    </div>
                                </div>
                            </div>

                            <div className="banner-img-three">
                                <img src="/images/creative-agency/agency-man.png" alt="consultant image" />
                            </div>
                        </div>  
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainBanner;