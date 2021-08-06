import React from 'react';
import Link from 'next/link';

const MainBanner = () => {
    return (
        <div id="home" className="main-banner banner-style-three banner-bg-five">
            <div className="d-table">
                <div className="d-table-cell">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <div className="banner-text">
                                    <h1>We Are a Creative Agency</h1>
                                    <p>So what is a creative agency. It is a company that offers a combination of strategy, design, technology and advertising services to clients, it is creative or expert lead.</p>
        
                                    <div className="banner-btn">
                                        <Link href="#">
                                            <a className="active">Get Started</a>
                                        </Link>
                                        <Link href="#">
                                            <a>Contact Us</a>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="banner-img-three">
                                <img src="/images/creative-agency/agency-man2.png" alt="consultant image" />
                            </div>
                        </div>  
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainBanner;