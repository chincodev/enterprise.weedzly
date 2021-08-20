import React from 'react';

const Services = (props) => {
    return (
        <div id="services" className="service-style-two pt-100">
            <div className="container">
                <div className="section-title">
                    <h2>Why Weedzly</h2>
                    {/* <p>This feature is essential for any mobile app, so make sure you have it! These types of notifications can directly alert your user.</p> */}
                </div>

                <div className="row">

                    {
                        props.selected === 'dispensaries' || props.selected === 'deliveries' && (
                            <>

                                <div className="col-lg-4 col-sm-6" style={{paddingBottom:'2rem'}}>
                                    <div className="service-item" style={{height:'100%'}}>
                                        <img src="/images/saas-landing/saas-service1.png" alt="icon" width='40px' height='40px'/>
                                        <h3>Online Ordering</h3>
                                        <p>Enable online ordering for pickup or delivery</p>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-sm-6" style={{paddingBottom:'2rem'}}>
                                    <div className="service-item" style={{height:'100%'}}>
                                        <img src="/images/saas-landing/saas-service2.png" alt="icon" width='40px' height='40px'/>
                                        <h3>Deals and Discounts</h3>
                                        <p>Create custom deals and discounts</p>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-sm-6" style={{paddingBottom:'2rem'}}>
                                    <div className="service-item" style={{height:'100%'}}>
                                        <img src="/images/saas-landing/saas-service3.png" alt="icon" width='40px' height='40px'/>
                                        <h3>Loyalty Program</h3>
                                        <p>Offer customers rewards and build a consistent customer base</p>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-sm-6" style={{paddingBottom:'2rem'}}>
                                    <div className="service-item" style={{height:'100%'}}>
                                        <img src="/images/saas-landing/saas-service4.png" alt="icon" width='40px' height='40px'/>
                                        <h3>Custom Weedzly Profile</h3>
                                        <p>Take control of your profile and grow your engagement</p>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-sm-6" style={{paddingBottom:'2rem'}}>
                                    <div className="service-item" style={{height:'100%'}}>
                                        <img src="/images/saas-landing/saas-service5.png" alt="icon" width='40px' height='40px'/>
                                        <h3>Interactive Reviews</h3>
                                        <p>Easily read and reply to customer reviews about your business.</p>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-sm-6" style={{paddingBottom:'2rem'}}>
                                    <div className="service-item" style={{height:'100%'}}>
                                        <img src="/images/saas-landing/saas-service6.png" alt="icon" width='40px' height='40px'/>
                                        <h3>Get Local Eyes On You</h3>
                                        <p>Grab a top spot in the search bar as a featured dispensary/delivery.</p>
                                    </div>
                                </div>

                            </>
                        )
                    }

                    {
                        props.selected === 'brands' && (
                            <>

                                <div className="col-lg-4 col-sm-6" style={{paddingBottom:'2rem'}}>
                                    <div className="service-item" style={{height:'100%'}}>
                                        <img src="/images/saas-landing/saas-service5.png" alt="icon" width='40px' height='40px'/>
                                        <h3>Interactive Reviews</h3>
                                        <p>Easily read and reply to customer reviews about your business.</p>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-sm-6" style={{paddingBottom:'2rem'}}>
                                    <div className="service-item" style={{height:'100%'}}>
                                        <img src="/images/saas-landing/saas-service4.png" alt="icon" width='40px' height='40px'/>
                                        <h3>Custom Weedzly Profile</h3>
                                        <p>Take control of your profile and grow your engagement</p>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-sm-6" style={{paddingBottom:'2rem'}}>
                                    <div className="service-item" style={{height:'100%'}}>
                                        <img src="/images/saas-landing/saas-service4.png" alt="icon" width='40px' height='40px'/>
                                        <h3>Update Your Product Catalog</h3>
                                        <p>You're in full control of your brand - Keep your community involved by updating your product catalog with new arrivals. Add new products with one simple click from our dashboard. With Weedzly, more shoppers can discover your products, and in turn increase your revenue.</p>
                                    </div>
                                </div>

                            </>
                        )
                    }
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