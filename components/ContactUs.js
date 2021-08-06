import React, { Component } from 'react';
import sendEmail from "../pages/api/send";

class ContactUs extends Component {

    constructor(props) {
        super(props)
        this.myForm = React.createRef()
    }

    state = {
        name: '',
        email: '',
        subject: '',
        message: '',
        sending: 0
    }

    changHandler = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }


    handleResponse = (status, msg) => {
        if (status === 200) {
            this.setState({
                sending: 2,
                email: '',
                message: '',
                subject: '',
                name: ''
            })
        } else {
            this.setState({
                sending: 3
            })
        }
    }

    submitHangler = async (event) => {
    
        event.preventDefault();
        this.setState({sending: 1})
        this.myForm.current.reset()
    

        const res = await fetch('/api/send', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
        })
        const text = await res.text()
        this.handleResponse(res.status, text)

    }

    render() {
        return (
            <div id="contact" className="contact-us ptb-100">
                <div className="container">
                    <div className="section-title">
                        {/* <span>Contact Us</span> */}
                        <h2>Send Us Your Message</h2>
                        <p>We have the perfect plans for your given budgets. That’s why we brought you three kinds of price planning.</p>
                    </div>  

                    <div className="contact-form-area">
                        <form
                            ref={this.myForm}
                            onSubmit={this.submitHangler}
                        >
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <input 
                                            type="text" 
                                            name="name"
                                            className="form-control" 
                                            id="Name" placeholder="Name" 
                                            onChange={this.changHandler}
                                            value={this.state.name}
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <input 
                                            name="email"
                                            type="email" 
                                            className="form-control" 
                                            id="Email"
                                            placeholder="Email" 
                                            onChange={this.changHandler}
                                            value={this.state.email}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="form-group">
                                <input 
                                    type="text" 
                                    name="subject"
                                    className="form-control" 
                                    id="Subject" 
                                    placeholder="Subject" 
                                    onChange={this.changHandler}
                                    value={this.state.subject}
                                />
                            </div>

                            <div className="form-group">
                                <textarea 
                                    className="form-control" 
                                    id="Message" 
                                    name="message"
                                    rows="5" 
                                    placeholder="Message"
                                    onChange={this.changHandler}
                                    value={this.state.message}
                                ></textarea>
                            </div>

                            <div className="text-center">
                            <button
                                type="submit"
                                className={`btn message-btn ${this.state.sending===2 ? 'message-btn' : this.state.sending===3 ? 'btn-danger' : ''}`} disabled={this.state.sending != 0 ? true : false}>
                                    {
                                          this.state.sending===1 ? (
                                              <>

                                                Sending...
                                              </>
                                          ) : this.state.sending===2 ? (
                                            <>

                                              Message Sent
                                            </>
                                        ) : this.state.sending===3 ? (
                                          <>

                                            Error sending email
                                          </>
                                      ) : (
                                            <>
                                              <span className="text-white pr-3"><i className="fas fa-paper-plane" /></span>
                                              Send Message
                                            </>
                                          )
                                    }
                            </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default ContactUs;