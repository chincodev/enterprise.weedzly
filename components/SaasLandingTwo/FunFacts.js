import React from 'react';

const FunFacts = () => {
    return (
        <div className="counter-style-two pt-100">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-sm-6">
                        <div className="counter-text">
                            <i className="flaticon-value"></i>
                            <h3><span className="counter">11</span>K</h3>
                            <p>Clients</p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6">
                        <div className="counter-text">
                            <i className="flaticon-customer-review"></i>
                            <h3><span className="counter">950</span>+</h3>
                            <p>Happy Clients</p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6">
                        <div className="counter-text">
                            <i className="flaticon-clipboard"></i>
                            <h3><span className="counter">5</span>+</h3>
                            <p>Pending Task</p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6">
                        <div className="counter-text">
                            <i className="flaticon-start-up"></i>
                            <h3><span className="counter">1300</span>+</h3>
                            <p>Projects Done</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FunFacts;