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
                            <h3>Weedzly</h3>
                          
                            <p>An all in one cannabis platform connecting consumers to cannabis brands & retailers.</p>

                            <div className="footer-social">
                                {/* <a href="https://www.facebook.com/" target="_blank"><i className="flaticon-facebook"></i></a>
                                <a href="https://twitter.com/" target="_blank"><i className="flaticon-twitter"></i></a>
                                <a href="https://www.linkedin.com/" target="_blank"><i className="flaticon-linkedin"></i></a>
                                <a href="https://www.instagram.com/" target="_blank"><i className="flaticon-instagram"></i></a> */}
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6">
                        <div className="footer-widget pl-90">
                            <h3>Enterprise</h3>
                            <ul>
                                <li>
                                    <Link href="/">
                                        <a>
                                            <i className="flaticon-right-arrow"></i>
                                            Dispensaries
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/deliveries">
                                        <a>
                                            <i className="flaticon-right-arrow"></i>
                                            Deliveries
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/brands">
                                        <a>
                                            <i className="flaticon-right-arrow"></i>
                                            Brands
                                        </a>
                                    </Link>
                                </li>
                                <li>           
                                    <Link href="/register">                
                                        <a>
                                            <i className="flaticon-right-arrow"></i>
                                            Sign Up
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
                                    <a href="https://weedzly.com/products" target='_blank'>
                                        <i className="flaticon-right-arrow"></i>
                                        Products
                                    </a>
                                </li>
                                <li>
                                    <a href="https://weedzly.com/map" target='_blank'>
                                        <i className="flaticon-right-arrow"></i>
                                        Map
                                    </a>
                                </li>
                                <li>
                                    <a href="https://weedzly.com/deals" target='_blank'>
                                        <i className="flaticon-right-arrow"></i>
                                        Deals
                                    </a>
                                </li>
                                <li>
                                    <a href="https://weedzly.com/strains" target='_blank'>
                                        <i className="flaticon-right-arrow"></i>
                                        Strains
                                    </a>
                                </li>
                                <li>
                                    <a href="https://weedzly.com/library" target='_blank'>
                                        <i className="flaticon-right-arrow"></i>
                                        Library
                                    </a>   
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6">
                        <div className="footer-widget pl-90">
                            <h3>Management</h3>
                            <ul>
                                <li>     
                                    <a href="https://app.weedzly.com">
                                        <i className="flaticon-right-arrow"></i>
                                        Business Login
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
                            {/* <img src="/images/visa.png" alt="visa card" />
                            <img src="/images/american-express.png" alt="american-express" />
                            <img src="/images/discover.png" alt="discover" />
                            <img src="/images/master-card.png" alt="master card" /> */}
                        </div>

                        <div className="col-lg-7 col-md-8 lh-1">
                            <p>Copyright &copy; {currentYear} Weedzly. All Rights Reserved</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default FooterSaasLandingTwo;