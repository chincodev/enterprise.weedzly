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
        <div id="home" className="main-banner banner-bg-one">
            {/* If you want to change the video need to update videoID */}
            <ModalVideo 
                channel='youtube' 
                isOpen={!isOpen} 
                videoId='bk7McNUjWgw' 
                onClose={() => setIsOpen(!isOpen)} 
            />
            
            <div className="d-table">
                <div className="d-table-cell">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-8">
                                <div className="banner-text">
                                    <h1>Super Fast & Reliable Booking App</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        
                                    <div className="banner-btn">
                                        <Link href="#">
                                            <a>Download App</a>
                                        </Link>

                                        <Link href="#play-video">
                                            <a
                                                onClick={e => {e.preventDefault(); openModal()}}
                                                className="banner-video popup-youtube mr-0"
                                            > 
                                                <i className="flaticon-play-button"></i>
                                                Watch Video
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
    
                            <div className="col-lg-4">
                                <div className="banner-img text-right">
                                    <img src="/images/app-landing/app-banner-mobile.png" alt="iphone" />
                                </div>
                            </div>
                        </div>  
                    </div>
                </div>
            </div>

            <div className="banner-shape">
                <img src="/images/shapes/home-shape.png" alt="shape" />
                <img src="/images/shapes/home-shape-two.png" alt="shape" />
                <img src="/images/shapes/home-shape-four.png" alt="shape" />
            </div>
        </div>
    )
}

export default MainBanner;