import React from 'react';
import Link from 'next/link';

const MainBanner = () => {
    return (
        <div id="home" className="main-banner banner-style-four">
            <div className="d-table">
                <div className="d-table-cell">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <div className="banner-text">
                                    <span>Hello</span>
                                    <h1>I’m Amelia Anderson</h1>
                                    <h6>UI/UX Designer</h6>

                                    <p>This is my homepage, so I have to say something about myself. Sometimes it is hard to introduce yourself because you know yourself so well that you do not</p>
        
                                    <div className="banner-btn">
                                        <Link href="#">
                                            <a>Lets Talk!</a>
                                        </Link>
                                        <Link href="#">
                                            <a className="cv-btn">Download CV</a>     
                                        </Link>
                                    </div>
                                </div>
                            </div>
    
                            <div className="col-lg-5 offset-lg-1">
                                <div className="banner-img-two">
                                    <img src="/images/personal-portfolio/portfolio-profile1.png" alt="iphone" />
                                </div>
                            </div>
                        </div>  
                    </div>
                </div>
            </div>

            <div className="banner-shape">
                <img src="/images/shapes/home-shape.png" alt="shape" />
                <img src="/images/shapes/home-shape-two.png" alt="shape" />
                <img src="/images/shapes/home-shape-four.png" alt="shape" />
            </div>
        </div>
    )
}

export default MainBanner;