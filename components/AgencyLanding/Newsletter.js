import React from 'react';

const Newsletter = () => {
    return (
        <div className="newsletter">
            <div className="container">
                <div className="newsletter-area newsletter-two">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="newsletter-text">
                                <h3>Subscribe Our Newsletter</h3>
                                <p>Your newsletter can provide great value, beyond sales, by informing your buyers with exciting content that resonates with them.</p>
                            </div>
                        </div>
        
                        <div className="col-lg-6">
                            <form className="newsletter-form">
                                <input type="email" className="form-control" placeholder="Enter your email" name="EMAIL" required />
    
                                <button className="default-btn electronics-btn" type="submit">
                                    Subscribe
                                </button>
                            </form>
                        </div>
                    </div>

                    <div className="subscribe-shape">
                        <img src="/images/shapes/subscribe-shape.png" alt="shape" />
                        <img src="/images/shapes/subscribe-shape-two.png" alt="shape" />
                        <img src="/images/shapes/subscribe-shape-three.png" alt="shape" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Newsletter;