import React, { Component } from 'react'

export default class SidebarDemosModal extends Component {
    state = {
        modal: false
    };
 
    closeModal = () => {
        this.props.onClick(this.state.modal);
    }

    render() {
        return (
            <>
                <div className={`demos-side-content ${this.props.active}`}>
                    <div className="modal-header">
                        <h2>View Demo</h2>
                        <button type="button" className="close" onClick={this.closeModal}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    
                    <div className="modal-body">
                        <ul>
                            <li>
                                <div className="demo-item">
                                    <a href="/saas-landing" target="_blank">
                                        <span>SaaS Landing</span>
                                        <img src="/images/demos/saas-landing.jpg" alt="Demos" />
                                    </a>
                                </div>
                            </li>
                            <li>
                                <div className="demo-item">
                                    <a href="/app-landing" target="_blank">
                                        <span>App Landing</span>
                                        <img src="/images/demos/app-landing.jpg" alt="Demos" />
                                    </a>
                                </div>
                            </li>
                            <li>
                                <div className="demo-item">
                                    <a href="/saas-landing-2" target="_blank">
                                        <span>SaaS Landing Two</span>
                                        <img src="/images/demos/saas-landing-2.jpg" alt="Demos" />
                                    </a>
                                </div>
                            </li>
                            <li>
                                <div className="demo-item">
                                    <a href="/agency-landing" target="_blank">
                                        <span>Agency Landing</span>
                                        <img src="/images/demos/agency-landing.jpg" alt="Demos" />
                                    </a>
                                </div>
                            </li>
                            <li>
                                <div className="demo-item">
                                    <a href="/personal-portfolio" target="_blank">
                                        <span>Personal Prtfolio</span>
                                        <img src="/images/demos/personal-portfolio.jpg" alt="Demos" />
                                    </a>
                                </div>
                            </li>
                            <li>
                                <div className="demo-item">
                                    <a href="/agency-landing-2" target="_blank">
                                        <span>Sgency Landing Two</span>
                                        <img src="/images/demos/agency-landing-2.jpg" alt="Demos" />
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </>
        )
    }
}
