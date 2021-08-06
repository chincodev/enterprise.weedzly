import React from 'react';
import Link from 'next/link';

const FooterPersonalPortfolio = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="footer-area footer-style-three footer-style-four">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-sm-6">
                        <div className="footer-widget">
                            <div className="footer-logo">
                                <img src="/images/logo.png" alt="logo" />
                            </div>

                            <p>My Name is Amelia Anderson. I live in New York City. I am a professional UI/UX Designer.</p>

                            <div className="footer-btn">
                                <a href="#">Hire Me</a>
                                <a href="#">Download CV</a>    
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6">
                        <div className="footer-widget pl-90">
                            <h3>Company</h3>
                            <ul>
                                <li>
                                    <Link href="#">
                                        <a>
                                            <i className="flaticon-right-arrow"></i>
                                            Advertise
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <a>
                                            <i className="flaticon-right-arrow"></i>
                                            Support
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <a>
                                            <i className="flaticon-right-arrow"></i>
                                            Marketing
                                        </a>
                                    </Link>
                                </li>
                                <li>           
                                    <Link href="#">                
                                        <a>
                                            <i className="flaticon-right-arrow"></i>
                                            Bonus
                                        </a> 
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <a>
                                            <i className="flaticon-right-arrow"></i>
                                            Contact
                                        </a> 
                                    </Link>  
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6">
                        <div className="footer-widget pl-90">
                            <h3>Quick Links</h3>
                            <ul>
                                <li>
                                    <a href="#home">
                                        <i className="flaticon-right-arrow"></i>
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <a href="#about">
                                        <i className="flaticon-right-arrow"></i>
                                        About
                                    </a>
                                </li>
                                <li>
                                    <a href="#services">
                                        <i className="flaticon-right-arrow"></i>
                                        Services
                                    </a>
                                </li>
                                <li>
                                    <a href="#case-study">
                                        <i className="flaticon-right-arrow"></i>
                                        Case Study
                                    </a>
                                </li>
                                <li>
                                    <a href="#testimonials">
                                        <i className="flaticon-right-arrow"></i>
                                        Testimonials
                                    </a>   
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6">
                        <div className="footer-widget pl-90">
                            <h3>Find Us</h3>
                            <ul>
                                <li>
                                    <a href="tel:+880123456789">
                                        <i className="flaticon-right-arrow"></i>
                                        +0880123456789
                                    </a>
                                </li>
                                <li>
                                    <a href="mailto:plexi@mail.com">
                                        <i className="flaticon-right-arrow"></i>
                                        plexi@mail.com
                                    </a>
                                </li>
                                <li>
                                    <a href="mailto:plexi@mail.com">
                                        <i className="flaticon-right-arrow"></i>
                                        info@plexi.com
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="flaticon-right-arrow"></i>
                                        28/A Street, USA
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="copyright-area">
                <div className="container">
                    <p>Copyright &copy; {currentYear} Plexi. All Rights Reserved by <a href="https://hibootstrap.com/" target="_blank">HiBootstrap</a></p>
                </div>
            </div>
        </footer>
    )
}

export default FooterPersonalPortfolio;