import React from 'react';
import Link from 'next/link';

const FooterSaasLandingTwo = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="footer-area footer-style-two footer-style-three">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-sm-6">
                        <div className="footer-widget">
                            <h3>Plexi</h3>
                          
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>

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
                                    <a href="#services">
                                        <i className="flaticon-right-arrow"></i>
                                        Services
                                    </a>
                                </li>
                                <li>
                                    <a href="#apps">
                                        <i className="flaticon-right-arrow"></i>
                                        Apps
                                    </a>
                                </li>
                                <li>
                                    <a href="#pricing">
                                        <i className="flaticon-right-arrow"></i>
                                        Pricing
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
                                    <a href="mailto:info@plexi.com">
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

export default FooterSaasLandingTwo;