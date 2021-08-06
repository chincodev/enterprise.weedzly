import React from 'react';

const Features = () => {
    return (
        <div id="features" className="feature-section pt-100 pb-70">
            <div className="container">
                <div className="section-title">
                    <span>App Features</span>
                    <h2>Boost up with Our Great Features</h2>
                    <p>Reserve your tickets for the trip you are planning to go on. Plexi gives you lots of great options that will let you have a safe and happy journey.</p>
                </div>

                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="feature-card">
                            <i className="flaticon-layers"></i>
                            <h3>Easy To Use</h3>
                            <p>Plexi is very user-friendly. The app is easy to operate and reserve your ticket for your next trip.</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="feature-card active">
                            <i className="flaticon-clipboard"></i>
                            <h3>Online Booking</h3>
                            <p>Book your ticket online at the given price, and you don't need to go miles to buy your ticket.</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6 offset-sm-3 offset-md-3 offset-lg-0">
                        <div className="feature-card">
                            <i className="flaticon-credit-card"></i>
                            <h3>Secured Payment</h3>
                            <p>You don’t have to worry about paying it in cash. We guarantee you it is secure online payment.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features;