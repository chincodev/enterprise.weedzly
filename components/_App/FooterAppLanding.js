import React from 'react';
import Link from 'next/link';

const FooterAppLanding = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="footer-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-sm-6">
                        <div className="footer-widget">
                            <div className="footer-logo">
                                <img src="/images/logo.png" alt="logo" />
                            </div>

                            <p>Our goal to make your life easier and give you a great traveling and booking service.</p>

                            <div className="footer-link">
                                <a href="https://play.google.com/store/apps" target="_blank">
                                    <img src="/images/google-play.png" alt="google image" />
                                </a>
                                  
                                <a href="https://www.apple.com/app-store/" target="_blank">
                                    <img src="/images/app-store.png" alt="google image" />
                                </a>
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
                                    <a href="#features">
                                        <i className="flaticon-right-arrow"></i>
                                        Features
                                    </a>
                                </li>
                                <li>
                                    <a href="#screenshots">
                                        <i className="flaticon-right-arrow"></i>
                                        Screenshots
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
                            <h3>Social Pages</h3>
                            <ul>
                                <li>
                                    <a href="https://www.facebook.com/" target="_blank">
                                        <i className="flaticon-right-arrow"></i>
                                        Facebook
                                    </a>
                                </li>
                                <li>                             
                                    <a href="https://twitter.com/" target="_blank">
                                        <i className="flaticon-right-arrow"></i> 
                                        Twitter
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/" target="_blank">
                                        <i className="flaticon-right-arrow"></i>
                                        Linkedin
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com/" target="_blank">
                                        <i className="flaticon-right-arrow"></i>
                                        Instagram
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.pinterest.com/" target="_blank">
                                        <i className="flaticon-right-arrow"></i>
                                        Pinterest
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

export default FooterAppLanding;