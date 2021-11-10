import React from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
const ModalVideo = dynamic(() => import('react-modal-video'), {
    ssr: false
});

const MainBanner = (props) => {
    // Popup Video
	const [isOpen, setIsOpen] = React.useState(true);
    const openModal = () => {
        setIsOpen(!isOpen);
    }
    return (
        <div id="home" className="main-banner main-banner-two banner-bg-three">
            {/* If you want to change the video need to update videoID */}

            <div className="d-table">
                <div className="d-table-cell">
                    <div className="container">
                        <div className="banner-text">
                            <h1>An All-in-One Solutions for Cannabis 
                                {
                                    props.selected === 'dispensaries' 
                                        ? ' Dispensaries' : props.selected === 'deliveries' 
                                        ? ' Deliveries' : props.selected === 'brands' 
                                        ? ' Brands' : ''
                                }
                            </h1>
                            <p>
                                {
                                    props.selected === 'dispensaries'
                                        ? "At Weedzly we work with all types of cannabis businesses to help retain customers and increase sales. We offer solutions for advertising, deals, loyalty programs, & online ordering. We're always looking to partner with dispensaries and help them utilize our platform to grow.  Schedule a demo today to find out how we could help improve your business operations."
                                        :  props.selected === 'deliveries' 
                                        ? "At Weedzly we work with all types of cannabis businesses to help retain customers and increase sales. We offer solutions for advertising, deals, loyalty programs & online ordering. We're always looking to partner with delivery services and help them utilize our platform to grow. Schedule a demo today to find out how we could help improve your business operations."
                                        :  props.selected === 'brands' 
                                        ? "At Weedzly we work with all types of cannabis businesses to help increase sales and retain customers. We're always looking to partner with brands and help them utilize our platform to grow.  Schedule a demo today to find out how we could help your brand."
                                        : ''
                                }
                                
                            </p>

                            <div className="banner-btn">
                                <Link href="/register">
                                    <a>Get Started</a>
                                </Link>

                                {/* <Link href="#play-video">
                                    <a
                                        onClick={e => {e.preventDefault(); openModal()}}
                                        className="banner-video popup-youtube"
                                    > 
                                        <i className="flaticon-play-button"></i>
                                        Watch Video
                                    </a>
                                </Link> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="banner-image-three">
                {
                    props.selected === 'dispensaries' ? <img src="/images/saas-landing/saas-laptop-three.jpg" alt="laptop" /> 
                        : props.selected === 'deliveries' ? <img src="/images/saas-landing/saas-laptop-three-delivery.jpg" alt="laptop" /> 
                        : props.selected === 'brands' && <img src="/images/saas-landing/saas-laptop-three-brand.jpg" alt="laptop" />
                }
                <img src="/images/shapes/home-shape-three.png" alt="shape" />
            </div>

            <div className="banner-shape-two">
                <img src="/images/saas-landing/saas-shape1.png" alt="shape" />
                <img src="/images/saas-landing/saas-shape1.png" alt="shape" />
            </div>
        </div>
    )
}

export default MainBanner;