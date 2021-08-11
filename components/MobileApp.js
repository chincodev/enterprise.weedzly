import React from 'react';
import Link from 'next/link';

const MobileApp = () => {
    return (
        <div className="keep-update">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-7">
                        <div className="keep-updating-text">
                            <div className="section-title text-left">
                                <h2>Offer Pickup, Delivery or Both</h2>
                            </div>
                            <p>Meet your customers where they are or have them come to you. With options for pickup, delivery, as well as curbside pickup, the choice is yours to make. Turn on pre-ordering so customers can order for the next day. Simplify the checkout process and save time with online ordering.</p>

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