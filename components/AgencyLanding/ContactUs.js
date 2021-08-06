import React from 'react';

const ContactUs = () => {
    return (
        <div id="contact" className="contact-us ptb-100">
            <div className="container">
                <div className="section-title">
                    <span>Contact Us</span>
                    <h2>Send Us Your Message</h2>
                    <p>We have the perfect plans for your given budgets. That’s why we brought you three kinds of price planning.</p>
                </div>  

                <div className="contact-form-area">
                    <form>
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="form-group">
                                    <input type="text" className="form-control" id="Name" placeholder="Name" />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="form-group">
                                    <input type="email" className="form-control" id="Email" placeholder="Email" />
                                </div>
                            </div>
                        </div>
                     
                        <div className="form-group">
                            <input type="text" className="form-control" id="Subject" placeholder="Subject" />
                        </div>

                        <div className="form-group">
                            <textarea className="form-control" id="Message" rows="5" placeholder="Message"></textarea>
                        </div>

                        <div className="text-center">
                            <button type="submit" className="btn message-btn">Send Message</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ContactUs;