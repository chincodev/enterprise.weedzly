import React from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
const ModalVideo = dynamic(() => import('react-modal-video'), {
    ssr: false
});

const MainBanner = () => {
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
                            <h1>An All-in-One Solutions for Cannabis Deliveries</h1>
                            <p>Weedzly is the solution made to help grow your delivery service to the next level. Streamline your operations with our sleek dashboard, where you can manage everything in one place. Take online orders, set custom delivery locations, and entice your customers with deals to keep them coming back.</p>

                            <div className="banner-btn">
                                <Link href="#">
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
                <img src="/images/saas-landing/saas-laptop-three.png" alt="laptop" />
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