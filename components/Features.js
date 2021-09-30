import React from 'react';
import Link from 'next/link';

const Features = (props) => {
    return (
        <div id="features" className="features-style-two pt-70 pb-100">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="feature-image">
                            <img src="/images/saas-landing/saas-laptop.png" alt="laptop" />
                        </div>
                    </div>

                    {
                        props.selected === 'brands' ? (
                            <div className="col-lg-6">
                                <div className="feature-text">
                                    <div className="section-title text-left">
                                        <h2>Engage with Customers</h2>
                                        <p>Build trust throughout the community by interacting with your customers through reviews. People like to see a brand that engages with their shoppers. Grow your audience base and build a loyal community around your brand.</p>
                                    </div>
                                    <div className="feature-btn">
                                        <Link href="/register">
                                            <a>Get Started</a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ) : props.selected === 'dispensaries' ? (
                            <div className="col-lg-6">
                                <div className="feature-text">
                                    <div className="section-title text-left">
                                        <h2>Online Ordering </h2>
                                        <p>Taking orders through Weedzly is the easiest way to increase sales and speed up transactions for your customers. Give them the option of ordering for pickup, curbside, or delivery. We also make it easy for you to display your menu on your own website so you can take control of your web traffic.</p>
                                    </div>

                                    <ul>
                                        <li>
                                            <i className="flaticon-check"></i>
                                            Decrease wait times by eliminating the most time consuming aspect of a transaction. 
                                        </li>
                                        <li>
                                            <i className="flaticon-check"></i>
                                            Put your menu in front of ready to purchase cannabis shoppers that are browsing Weedzly.
                                        </li>
                                        <li>
                                            <i className="flaticon-check"></i>
                                            Embed your menu on your own website and take orders directly from there.    
                                        </li>
                                        {/* <li>
                                            <i className="flaticon-check"></i>
                                            24/7 Support
                                        </li>
                                        <li>
                                            <i className="flaticon-check"></i>
                                            Free New Updates
                                        </li>
                                        <li>
                                            <i className="flaticon-check"></i>
                                            Strong Secured Data Storage
                                        </li> */}
                                    </ul>
                                    
                                    <div className="feature-btn">
                                        <Link href="/register">
                                            <a>Get Started</a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="col-lg-6">
                                <div className="feature-text">
                                    <div className="section-title text-left">
                                        <h2>Online Ordering </h2>
                                        <p>Taking orders through Weedzly is the easiest way to increase sales and speed up transactions for your customers. We also make it easy for you to display your menu on your own website, so you can take control of your web traffic.</p>
                                    </div>

                                    <ul>
                                        <li>
                                            <i className="flaticon-check"></i>
                                            Keep your customers updated with text & email updates. 
                                        </li>
                                        <li>
                                            <i className="flaticon-check"></i>
                                            Put your menu in front of ready to purchase cannabis shoppers that are browsing Weedzly.
                                        </li>
                                        <li>
                                            <i className="flaticon-check"></i>
                                            Embed your menu on your own website and take orders directly from there. 
                                        </li>
                                        {/* <li>
                                            <i className="flaticon-check"></i>
                                            24/7 Support
                                        </li>
                                        <li>
                                            <i className="flaticon-check"></i>
                                            Free New Updates
                                        </li>
                                        <li>
                                            <i className="flaticon-check"></i>
                                            Strong Secured Data Storage
                                        </li> */}
                                    </ul>
                                    
                                    <div className="feature-btn">
                                        <Link href="/register">
                                            <a>Get Started</a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>

            <div className="featues-shape">
                <img src="/images/saas-landing/saas-shape4.png" alt="shape" />
            </div>
        </div>
    )
}

export default Features;