import React from 'react';
import Link from 'next/link';

const MobileApp = (props) => {
    return (
        <div className="keep-update">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-7">
                        <div className="keep-updating-text">
                            <div className="section-title text-left">
                                <h2>    
                                    {
                                        props.selected === 'dispensaries' ? 'Offer Pickup, Delivery or Both'
                                            : props.selected === 'deliveries' ? 'Deliveries Made Simple' 
                                            : props.selected === 'brands' ? 'title for brands' 
                                            : ''
                                    }
                                </h2>
                            </div>
                            <p>
                                {
                                    props.selected === 'dispensaries' ? 'Meet your customers where they are or have them come to you. With options for pickup, delivery, as well as curbside pickup, the choice is yours to make. Turn on pre-ordering so customers can order for the next day. Simplify the checkout process and save time with online ordering.'
                                        : props.selected === 'deliveries' ? `In today's digital age, customers want to press the "easy" button that lets them easily find a cannabis business that fits their needs. When listed, potential customers will be able to find your business and place an order with the click of a few buttons. We want to help grow your revenue and make serving your customers more simple, so you can focus on growing your business.` 
                                        : props.selected === 'brands' ? 'Nice text for brands' 
                                        : ''
                                }
                            </p>

                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="keep-img">
                            <img src="/images/saas-landing/saas-iphone-two.png" alt="iphone" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="keep-shape">
                <img src="/images/saas-landing/saas-shape5.png" alt="shape" />
            </div>
        </div>
    )
}

export default MobileApp;