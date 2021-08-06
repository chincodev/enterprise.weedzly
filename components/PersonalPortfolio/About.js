import React from 'react';
import Link from 'next/link';

const About = () => {
    return (
        <div id="about" className="about-section pt-100">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-lg-4 p-0">
                        <div className="about-img">
                            <img src="/images/personal-portfolio/portfolio-about2.png" alt="about image" />
                            
                            <div className="about-img-text">
                                <p>Amelia Anderson</p>
                                <ul>
                                    <li>
                                        <a href="https://www.facebook.com/" target="_blank">
                                            <i className="flaticon-facebook"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://twitter.com/" target="_blank">
                                            <i className="flaticon-twitter"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.behance.net/" target="_blank">
                                            <i className="flaticon-behance"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://dribbble.com/" target="_blank">
                                            <i className="flaticon-dribbble"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-7">
                        <div className="about-text mt-30">
                            <h2>A Little Brief About Myself</h2>
                            <p>My name is Amelia Anderson. I live in New York City. I am a UI/UX designer. UI, or user interface, focuses on the look and layout. A UX designer
                            ensures a product makes sense to the user by creating a path that logically flows from one step to the next. A UI designer ensures each page visually communicates that path. And I have 10 years experience.</p>

                            <ul>
                                <li>
                                    <i className="flaticon-email"></i>
                                    contact@plexi.com
                                </li>
                                <li>
                                    <i className="flaticon-pin"></i>
                                    28/A Street, New York, USA
                                </li>
                                <li>
                                    <i className="flaticon-phone-call"></i>
                                    +13028580567
                                </li>
                                <li>
                                    <i className="flaticon-globe"></i>
                                    www.domain.com
                                </li>
                                <li>
                                    <i className="flaticon-flags"></i>
                                    North American
                                </li>
                                <li>
                                    <i className="flaticon-laptop"></i>
                                    Available Freelancer
                                </li>
                            </ul>

                            <div className="about-btn">
                                <Link href="#">
                                    <a>Hire Now</a>
                                </Link>
                                <Link href="#">
                                    <a>See My Work</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="about-shape">
                <img src="/images/map-two.png" alt="map" />
            </div>
        </div>
    )
}

export default About;