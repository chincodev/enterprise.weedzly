import React from 'react';
import Link from 'next/link';

const FooterAgencyLandingTwo = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="footer-area footer-style-two footer-style-five">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-sm-6">
                        <div className="footer-widget">
                            <div className="footer-logo">
                                <img src="/images/logo.png" alt="logo" />
                            </div>

                            <p>We are always working to provide you the best business guidance.</p>

                            <div className="footer-social">
                                <a href="https://www.facebook.com/" target="_blank"><i className="flaticon-facebook"></i></a>
                                <a href="https://twitter.com/" target="_blank"><i className="flaticon-twitter"></i></a>
                                <a href="https://www.linkedin.com/" target="_blank"><i className="flaticon-linkedin"></i></a>
                                <a href="https://www.instagram.com/" target="_blank"><i className="flaticon-instagram"></i></a>
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
                                    <i className="flaticon-right-arrow"></i>
                                    28/A Street, USA
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="copyright-area">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-5 col-md-4 lh-1">
                            <img src="/images/visa.png" alt="visa card" />
                            <img src="/images/american-express.png" alt="american-express" />
                            <img src="/images/discover.png" alt="discover" />
                            <img src="/images/master-card.png" alt="master card" />
                        </div>

                        <div className="col-lg-7 col-md-8 lh-1">
                            <p>Copyright &copy; {currentYear} Plexi. All Rights Reserved by <a href="https://hibootstrap.com/" target="_blank">HiBootstrap</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default FooterAgencyLandingTwo;