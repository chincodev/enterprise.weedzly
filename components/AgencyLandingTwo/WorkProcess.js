import React from 'react';

const WorkProcess = () => {
    return (
        <div className="work-process pt-100 pb-70">
            <div className="container">
                <div className="section-title">
                    <span>Working Process</span>
                    <h2>Have a Look Our Working Strategy</h2>
                    <p>Our goal is to give you a high-class strategy for your great business idea and make it work step by step. Here is how we work.</p>
                </div>

                <div className="row">
                    <div className="col-lg-2 col-sm-6 offset-lg-1">
                        <div className="process-card">
                            <h2>1</h2>
                            <h3>Research</h3>
                        </div>
                    </div>

                    <div className="col-lg-2 col-sm-6">
                        <div className="process-card card-two">
                            <h2>2</h2>
                            <h3>Design</h3>
                        </div>
                    </div>

                    <div className="col-lg-2 col-sm-6">
                        <div className="process-card card-three">
                            <h2>3</h2>
                            <h3>Build</h3>
                        </div>
                    </div>
                    
                    <div className="col-lg-2 col-sm-6">
                        <div className="process-card card-four">
                            <h2>4</h2>
                            <h3>Testing</h3>
                        </div>
                    </div>

                    <div className="col-lg-2 col-sm-6 offset-sm-3 offset-md-3 offset-lg-0">
                        <div className="process-card card-five">
                            <h2>5</h2>
                            <h3>Publish</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WorkProcess;