import React from 'react';
import Link from 'next/link';

const BuildWithStandardCode = () => {
    return (
        <div className="standard-section pt-100">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="standard-text">
                            <div className="section-title text-left">
                                <span>Standard Code</span>
                                <h2>Generate By Standard Code</h2>
                            </div>

                            <p>With Plexi, code generation is the process by which a compiler's code generator converts some intermediate representation of source code into a form that can be readily executed by a machine.Sophisticated compilers typically perform multiple passes over various intermediate forms.</p>

                            <p>This multi-stage process is used because many algorithms for code optimization are easier to apply one at a time, or because the input to one optimization relies on the completed processing performed by another optimization.</p>

                            <div className="standard-btn">
                                <Link href="#">
                                    <a>Get Started</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="standard-img">
                            <img src="/images/saas-landing/saas-laptop-two.png" alt="laptop" />
                        </div>
                    </div>
                </div>

                <div className="standard-shape">
                    <img src="/images/map-three.png" alt="shape" />
                </div>
            </div>
        </div>
    )
}

export default BuildWithStandardCode;