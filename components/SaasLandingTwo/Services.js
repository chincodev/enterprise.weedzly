import React from 'react';

const Services = () => {
    return (
        <div id="services" className="service-style-two pt-100">
            <div className="container">
                <div className="section-title">
                    <h2>Why Weedzly</h2>
                    <p>This feature is essential for any mobile app, so make sure you have it! These types of notifications can directly alert your user.</p>
                </div>

                <div className="row">
                    <div className="col-lg-4 col-sm-6">
                        <div className="service-item">
                            <img src="/images/saas-landing/saas-service1.png" alt="icon" />
                            <h3>Online Ordering</h3>
                            <p>Enable online ordering for pickup or delivery</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6">
                        <div className="service-item">
                            <img src="/images/saas-landing/saas-service2.png" alt="icon" />
                            <h3>Deals and Discounts</h3>
                            <p>Create custom deals and discounts</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6">
                        <div className="service-item">
                            <img src="/images/saas-landing/saas-service3.png" alt="icon" />
                            <h3>Loyalty Program</h3>
                            <p>Offer customers rewards and build a consistent customer base</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6">
                        <div className="service-item">
                            <img src="/images/saas-landing/saas-service4.png" alt="icon" />
                            <h3>Custom Weedzly Profile</h3>
                            <p>Take control of your profile and boost your local seo</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6">
                        <div className="service-item">
                            <img src="/images/saas-landing/saas-service5.png" alt="icon" />
                            <h3>Interactive Reviews</h3>
                            <p>Easily read and reply to customer reviews about your business.</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6">
                        <div className="service-item">
                            <img src="/images/saas-landing/saas-service6.png" alt="icon" />
                            <h3>Get Local Eyes On You</h3>
                            <p>Grab a top spot in the search bar as a featured dispensary/delivery.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="service-shape">
                <img src="/images/map-four.png" alt="map shape" />
                <img src="/images/saas-landing/saas-shape3.png" alt="shape" />
            </div>
        </div>
    )
}

export default Services;