import React from 'react';

const ContactUs = () => {
    return (
        <div id="contact" className="contact-section contact-bg">
            <div className="container">
                <div className="row">
                    <div className="col-lg-7 offset-lg-5">
                        <div className="contact-form">
                            <h2>Let Me Know Your Project</h2>
                            <form id="contactForm">
                                <div className="row">
                                    <div className="col-md-12 col-sm-6">
                                        <div className="form-group">
                                            <input type="text" name="name" id="name" className="form-control" required placeholder="Name" />
                                        </div>
                                    </div>
                                
                                    <div className="col-md-12 col-sm-6">
                                        <div className="form-group">
                                            <input type="email" name="email" id="email" className="form-control" required placeholder="Email" />
                                        </div>
                                    </div>
									 
									<div className="col-md-12 col-md-12">
                                        <div className="form-group">
                                            <input type="text" name="msg_subject" id="msg_subject" className="form-control" required data-error="Please enter your subject" placeholder="Subject" />
                                        </div>
                                    </div>
                                
                                    <div className="col-lg-12 col-md-12">
                                        <div className="form-group">
                                            <textarea name="message" className="message-field" id="message" cols="30" rows="5" required  placeholder="Message"></textarea>
                                        </div>
                                    </div>
                                
                                    <div className="col-lg-12 col-md-12">
                                        <button type="submit" className="default-btn contact-btn">
                                            Send Message
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactUs;