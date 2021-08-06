import React, { Component } from 'react'
import Link from 'next/link';

export default class Skills extends Component {
    // Tab
    openTabSection = (evt, tabNmae) => {
        let i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabs_item");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].classList.remove("fadeInUp");
            tabcontent[i].style.display = "none";
        }

        tablinks = document.getElementsByTagName("li");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace("current", "");
        }

        document.getElementById(tabNmae).style.display = "block";
        document.getElementById(tabNmae).className += " fadeInUp animated";
        evt.currentTarget.className += "current";
    }
    render() {
        return (
            <div id="software" className="software-section pt-100 pb-70">
                <div className="container">
                    <div className="section-title">
                        <h2>Software I Use For Work</h2>
                        <p>This feature is essential for any mobile app, so make sure you have it! These types of notifications can directly alert your user.</p>
                    </div>

                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="software-img">
                                <img src="/images/personal-portfolio/portfolio-software.png" alt="software image" />
        
                                <div className="software-img-text">
                                    <img src="/images/personal-portfolio/portfolio-icon-1.png" alt="photoshop icon" />
                                    <p>Adobe Photoshop 2019</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="software-text">
                                <ul className="tabs">
                                    <li
                                        className="current"
                                        onClick={(e) => this.openTabSection(e, 'tab1')}
                                    >
                                        UI/UX Design
                                    </li>
                                    <li
                                        onClick={(e) => this.openTabSection(e, 'tab2')}
                                    >
                                        Web Development
                                    </li>
                                    <li
                                        onClick={(e) => this.openTabSection(e, 'tab3')}
                                    >
                                        Video Editing
                                    </li>
                                </ul>
 
                                <div className="tab-content">
                                    <div id="tab1" className="tabs_item">
                                        <h2>Adobe Photoshop 2019</h2>
                                        <p>Adobe Photoshop is a raster graphics editor developed and published by Adobe Inc. for Windows and macOS. It was originally created in 1988 by Thomas and John Knoll. Since then, the software has become the industry standard not only in raster graphics editing, but in digital art as a whole.</p>
                                        <h3>Also Worked With</h3>

                                        <ul>
                                            <li>
                                                <img src="/images/personal-portfolio/portfolio-icon-2.png" alt="adobe xd icon" />
                                            </li>
                                            <li>
                                                <img src="/images/personal-portfolio/portfolio-icon-3.png" alt="figma icon" />
                                            </li>
                                        </ul>

                                        <Link href="#">
                                            <a className="software-link">Hire Now</a>
                                        </Link>
                                    </div>

                                    <div id="tab2" className="tabs_item">
                                        <h2>Visual Studio</h2>
                                        <p>Visual Studio is a raster code editor developed and published by Adobe Inc. for Windows and macOS. It was originally created in 1988 by Thomas and John Knoll. Since then, the software has become the industry standard not only in raster graphics editing, but in digital art as a whole.</p>
                                        <h3>Also Worked With</h3>

                                        <ul>
                                            <li>
                                                <img src="/images/personal-portfolio/portfolio-icon-2.png" alt="adobe xd icon" />
                                            </li>
                                            <li>
                                                <img src="/images/personal-portfolio/portfolio-icon-3.png" alt="figma icon" />
                                            </li>
                                        </ul>

                                        <Link href="#">
                                            <a className="software-link">Hire Now</a>
                                        </Link>
                                    </div>

                                    <div id="tab3" className="tabs_item">
                                        <h2>Adobe Premierer</h2>
                                        <p>Adobe Premiere is a raster video editor developed and published by Adobe Inc. for Windows and macOS. It was originally created in 1988 by Thomas and John Knoll. Since then, the software has become the industry standard not only in raster graphics editing, but in digital art as a whole.</p>
                                        <h3>Also Worked With</h3>

                                        <ul>
                                            <li>
                                                <img src="/images/personal-portfolio/portfolio-icon-2.png" alt="adobe xd icon" />
                                            </li>
                                            <li>
                                                <img src="/images/personal-portfolio/portfolio-icon-3.png" alt="figma icon" />
                                            </li>
                                        </ul>

                                        <Link href="#">
                                            <a className="software-link">Hire Now</a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="software-shape">
                    <img src="/images/shapes/home-shape.png" alt="shape" />
                    <img src="/images/shapes/home-shape-four.png" alt="shape" />
                    <img src="/images/shapes/home-shape-two.png" alt="shape" />
                    <img src="/images/shapes/subscribe-shape-three.png" alt="shape" />
                </div>
            </div>
        )
    }
}
