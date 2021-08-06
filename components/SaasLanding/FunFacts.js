import React from 'react';

const FunFacts = () => {
    return (
        <div className="counter-section pt-100 pb-70">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-9 offset-lg-1">
                        <div className="row">
                            <div className="col-lg-2 col-6">
                                <div className="counter-text">
                                    <i className="flaticon-value"></i>
                                    <h2><span className="counter">11</span>K</h2>
                                    <p>Clients</p>
                                </div>
                            </div>
                            <div className="col-lg-2 col-6">
                                <div className="counter-text">
                                    <i className="flaticon-customer-review"></i>
                                    <h2><span className="counter">950</span>+</h2>
                                    <p>Happy Clients</p>
                                </div>
                            </div>
                            <div className="col-lg-2 col-6">
                                <div className="counter-text">
                                    <i className="flaticon-clipboard"></i>
                                    <h2><span className="counter">5</span>+</h2>
                                    <p>Pending Task</p>
                                </div>
                            </div>
                            <div className="col-lg-2 col-6">
                                <div className="counter-text">
                                    <i className="flaticon-start-up"></i>
                                    <h2><span className="counter">1300</span>+</h2>
                                    <p>Prjects Done</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="counter-img">
                <img src="/images/saas-landing/saas-laptop.png" alt="laptop" />
                <img src="/images/saas-landing/saas-iphone.png" alt="laptop" />
            </div>
        </div>
    )
}

export default FunFacts;