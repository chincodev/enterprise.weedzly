import React from 'react';

const Newsletter = () => {
    return (
        <div className="newsletter newsletter-style-two ptb-100">
            <div className="container">
                <div className="newsletter-area">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="newsletter-text">
                                <h3>Subscribe Our Newsletter</h3>
                                <p>Your newsletter can provide great value, beyond sales, by informing your buyers with exciting content that resonates with them. So subscribe to our newsletter.</p>
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
                </div>
            </div>
        </div>
    )
}

export default Newsletter;