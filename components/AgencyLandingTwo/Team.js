import React from 'react';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    loop:true,
    margin:10,
    nav:false,
    dots:true,
    responsive:{
        0:{
            items:1
        },
        500:{
            items:2
        },
        768:{
            items:3
        },
        1000:{
            items:4
        }
    }
};

const Team = () => {
    const [display, setDisplay] = React.useState(false);

    React.useEffect(() => {
        setDisplay(true);
    }, [])
    return (
        <div className="team-section pt-100">
            <div className="container">
                <div className="section-title">
                    <span>Team Members</span>
                    <h2>Our Creative Employee</h2>
                    <p>Here is our dedicated team of Employee, who works creatively and relentlessly to bring you the best of the best service.</p>
                </div>

                {display ? <OwlCarousel 
                    className="team-slider owl-carousel owl-theme"
                    {...options}
                >
                    <div className="team-card">
                        <div className="team-img">
                            <img src="/images/creative-agency/agency-team1.jpg" alt="team member" />

                            <div className="team-hover">
                                <div className="team-hover-text">
                                    <h3>Michle John</h3>
                                    <p>Market Analysis</p>
                                    <ul>
                                        <li>
                                            <a href="https://www.facebook.com/" target="_blank"><i className="flaticon-facebook"></i></a>
                                        </li>
                                        <li>
                                            <a href="https://twitter.com/" target="_blank"><i className="flaticon-twitter"></i></a>
                                        </li>
                                        <li>
                                            <a href="https://www.linkedin.com/" target="_blank"><i className="flaticon-linkedin"></i></a>
                                        </li>
                                        <li>
                                            <a href="https://www.instagram.com/" target="_blank"><i className="flaticon-instagram"></i></a>
                                        </li>
                                    </ul>
                                </div> 
                            </div>
                        </div>
                    </div>

                    <div className="team-card">
                        <div className="team-img">
                            <img src="/images/creative-agency/agency-team2.jpg" alt="team member" />

                            <div className="team-hover">
                                <div className="team-hover-text">
                                    <h3>George</h3>
                                    <p>Editor</p>
                                    <ul>
                                        <li>
                                            <a href="https://www.facebook.com/" target="_blank"><i className="flaticon-facebook"></i></a>
                                        </li>
                                        <li>
                                            <a href="https://twitter.com/" target="_blank"><i className="flaticon-twitter"></i></a>
                                        </li>
                                        <li>
                                            <a href="https://www.linkedin.com/" target="_blank"><i className="flaticon-linkedin"></i></a>
                                        </li>
                                        <li>
                                            <a href="https://www.instagram.com/" target="_blank"><i className="flaticon-instagram"></i></a>
                                        </li>
                                    </ul>
                                </div> 
                            </div>
                        </div>
                    </div>

                    <div className="team-card">
                        <div className="team-img">
                            <img src="/images/creative-agency/agency-team3.jpg" alt="team member" />

                            <div className="team-hover">
                                <div className="team-hover-text">
                                    <h3>Harry</h3>
                                    <p>Consultant</p>
                                    <ul>
                                        <li>
                                            <a href="https://www.facebook.com/" target="_blank"><i className="flaticon-facebook"></i></a>
                                        </li>
                                        <li>
                                            <a href="https://twitter.com/" target="_blank"><i className="flaticon-twitter"></i></a>
                                        </li>
                                        <li>
                                            <a href="https://www.linkedin.com/" target="_blank"><i className="flaticon-linkedin"></i></a>
                                        </li>
                                        <li>
                                            <a href="https://www.instagram.com/" target="_blank"><i className="flaticon-instagram"></i></a>
                                        </li>
                                    </ul>
                                </div> 
                            </div>
                        </div>
                    </div>

                    <div className="team-card">
                        <div className="team-img">
                            <img src="/images/creative-agency/agency-team4.jpg" alt="team member" />

                            <div className="team-hover">
                                <div className="team-hover-text">
                                    <h3>Noah</h3>
                                    <p>Researcher</p>
                                    <ul>
                                        <li>
                                            <a href="https://www.facebook.com/" target="_blank"><i className="flaticon-facebook"></i></a>
                                        </li>
                                        <li>
                                            <a href="https://twitter.com/" target="_blank"><i className="flaticon-twitter"></i></a>
                                        </li>
                                        <li>
                                            <a href="https://www.linkedin.com/" target="_blank"><i className="flaticon-linkedin"></i></a>
                                        </li>
                                        <li>
                                            <a href="https://www.instagram.com/" target="_blank"><i className="flaticon-instagram"></i></a>
                                        </li>
                                    </ul>
                                </div> 
                            </div>
                        </div>
                    </div>

                    <div className="team-card">
                        <div className="team-img">
                            <img src="/images/creative-agency/agency-team1.jpg" alt="team member" />

                            <div className="team-hover">
                                <div className="team-hover-text">
                                    <h3>Michle John</h3>
                                    <p>Market Analysis</p>
                                    <ul>
                                        <li>
                                            <a href="https://www.facebook.com/" target="_blank"><i className="flaticon-facebook"></i></a>
                                        </li>
                                        <li>
                                            <a href="https://twitter.com/" target="_blank"><i className="flaticon-twitter"></i></a>
                                        </li>
                                        <li>
                                            <a href="https://www.linkedin.com/" target="_blank"><i className="flaticon-linkedin"></i></a>
                                        </li>
                                        <li>
                                            <a href="https://www.instagram.com/" target="_blank"><i className="flaticon-instagram"></i></a>
                                        </li>
                                    </ul>
                                </div> 
                            </div>
                        </div>
                    </div>

                    <div className="team-card">
                        <div className="team-img">
                            <img src="/images/creative-agency/agency-team2.jpg" alt="team member" />

                            <div className="team-hover">
                                <div className="team-hover-text">
                                    <h3>George</h3>
                                    <p>Editor</p>
                                    <ul>
                                        <li>
                                            <a href="https://www.facebook.com/" target="_blank"><i className="flaticon-facebook"></i></a>
                                        </li>
                                        <li>
                                            <a href="https://twitter.com/" target="_blank"><i className="flaticon-twitter"></i></a>
                                        </li>
                                        <li>
                                            <a href="https://www.linkedin.com/" target="_blank"><i className="flaticon-linkedin"></i></a>
                                        </li>
                                        <li>
                                            <a href="https://www.instagram.com/" target="_blank"><i className="flaticon-instagram"></i></a>
                                        </li>
                                    </ul>
                                </div> 
                            </div>
                        </div>
                    </div>

                    <div className="team-card">
                        <div className="team-img">
                            <img src="/images/creative-agency/agency-team3.jpg" alt="team member" />

                            <div className="team-hover">
                                <div className="team-hover-text">
                                    <h3>Harry</h3>
                                    <p>Consultant</p>
                                    <ul>
                                        <li>
                                            <a href="https://www.facebook.com/" target="_blank"><i className="flaticon-facebook"></i></a>
                                        </li>
                                        <li>
                                            <a href="https://twitter.com/" target="_blank"><i className="flaticon-twitter"></i></a>
                                        </li>
                                        <li>
                                            <a href="https://www.linkedin.com/" target="_blank"><i className="flaticon-linkedin"></i></a>
                                        </li>
                                        <li>
                                            <a href="https://www.instagram.com/" target="_blank"><i className="flaticon-instagram"></i></a>
                                        </li>
                                    </ul>
                                </div> 
                            </div>
                        </div>
                    </div>

                    <div className="team-card">
                        <div className="team-img">
                            <img src="/images/creative-agency/agency-team4.jpg" alt="team member" />

                            <div className="team-hover">
                                <div className="team-hover-text">
                                    <h3>Noah</h3>
                                    <p>Researcher</p>
                                    <ul>
                                        <li>
                                            <a href="https://www.facebook.com/" target="_blank"><i className="flaticon-facebook"></i></a>
                                        </li>
                                        <li>
                                            <a href="https://twitter.com/" target="_blank"><i className="flaticon-twitter"></i></a>
                                        </li>
                                        <li>
                                            <a href="https://www.linkedin.com/" target="_blank"><i className="flaticon-linkedin"></i></a>
                                        </li>
                                        <li>
                                            <a href="https://www.instagram.com/" target="_blank"><i className="flaticon-instagram"></i></a>
                                        </li>
                                    </ul>
                                </div> 
                            </div>
                        </div>
                    </div>

                    <div className="team-card">
                        <div className="team-img">
                            <img src="/images/creative-agency/agency-team1.jpg" alt="team member" />

                            <div className="team-hover">
                                <div className="team-hover-text">
                                    <h3>Michle John</h3>
                                    <p>Market Analysis</p>
                                    <ul>
                                        <li>
                                            <a href="https://www.facebook.com/" target="_blank"><i className="flaticon-facebook"></i></a>
                                        </li>
                                        <li>
                                            <a href="https://twitter.com/" target="_blank"><i className="flaticon-twitter"></i></a>
                                        </li>
                                        <li>
                                            <a href="https://www.linkedin.com/" target="_blank"><i className="flaticon-linkedin"></i></a>
                                        </li>
                                        <li>
                                            <a href="https://www.instagram.com/" target="_blank"><i className="flaticon-instagram"></i></a>
                                        </li>
                                    </ul>
                                </div> 
                            </div>
                        </div>
                    </div>

                    <div className="team-card">
                        <div className="team-img">
                            <img src="/images/creative-agency/agency-team2.jpg" alt="team member" />

                            <div className="team-hover">
                                <div className="team-hover-text">
                                    <h3>George</h3>
                                    <p>Editor</p>
                                    <ul>
                                        <li>
                                            <a href="https://www.facebook.com/" target="_blank"><i className="flaticon-facebook"></i></a>
                                        </li>
                                        <li>
                                            <a href="https://twitter.com/" target="_blank"><i className="flaticon-twitter"></i></a>
                                        </li>
                                        <li>
                                            <a href="https://www.linkedin.com/" target="_blank"><i className="flaticon-linkedin"></i></a>
                                        </li>
                                        <li>
                                            <a href="https://www.instagram.com/" target="_blank"><i className="flaticon-instagram"></i></a>
                                        </li>
                                    </ul>
                                </div> 
                            </div>
                        </div>
                    </div>

                    <div className="team-card">
                        <div className="team-img">
                            <img src="/images/creative-agency/agency-team3.jpg" alt="team member" />

                            <div className="team-hover">
                                <div className="team-hover-text">
                                    <h3>Harry</h3>
                                    <p>Consultant</p>
                                    <ul>
                                        <li>
                                            <a href="https://www.facebook.com/" target="_blank"><i className="flaticon-facebook"></i></a>
                                        </li>
                                        <li>
                                            <a href="https://twitter.com/" target="_blank"><i className="flaticon-twitter"></i></a>
                                        </li>
                                        <li>
                                            <a href="https://www.linkedin.com/" target="_blank"><i className="flaticon-linkedin"></i></a>
                                        </li>
                                        <li>
                                            <a href="https://www.instagram.com/" target="_blank"><i className="flaticon-instagram"></i></a>
                                        </li>
                                    </ul>
                                </div> 
                            </div>
                        </div>
                    </div>

                    <div className="team-card">
                        <div className="team-img">
                            <img src="/images/creative-agency/agency-team4.jpg" alt="team member" />

                            <div className="team-hover">
                                <div className="team-hover-text">
                                    <h3>Noah</h3>
                                    <p>Researcher</p>
                                    <ul>
                                        <li>
                                            <a href="https://www.facebook.com/" target="_blank"><i className="flaticon-facebook"></i></a>
                                        </li>
                                        <li>
                                            <a href="https://twitter.com/" target="_blank"><i className="flaticon-twitter"></i></a>
                                        </li>
                                        <li>
                                            <a href="https://www.linkedin.com/" target="_blank"><i className="flaticon-linkedin"></i></a>
                                        </li>
                                        <li>
                                            <a href="https://www.instagram.com/" target="_blank"><i className="flaticon-instagram"></i></a>
                                        </li>
                                    </ul>
                                </div> 
                            </div>
                        </div>
                    </div>
                </OwlCarousel> : ''}
            </div>
        </div>
    )
}

export default Team;