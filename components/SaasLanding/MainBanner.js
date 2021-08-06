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
        <div id="home" className="main-banner banner-style-two banner-bg-two">
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
                        <div className="banner-text">
                            <h1>Make Your Business More Smarter</h1>
                            <p>The moment you focus on a goal, your goal becomes a magnet, pulling you with business and your resources toward it.</p>

                            <div className="banner-btn">
                                <Link href="#">
                                    <a>Get Started</a>
                                </Link>

                                <Link href="#play-video">
                                    <a
                                        onClick={e => {e.preventDefault(); openModal()}}
                                        className="banner-video popup-youtube"
                                    > 
                                        <i className="flaticon-play-button"></i>
                                        Watch Video
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="banner-image-two">
                <img src="/images/saas-landing/saas-laptop.png" alt="laptop" />
                <img src="/images/saas-landing/saas-iphone.png" alt="iphone" />
                <img src="/images/shapes/home-shape-three.png" alt="shape" />
            </div>

            <div className="banner-shape">
                <img src="/images/shapes/home-shape.png" alt="shape" />
                <img src="/images/shapes/home-shape-two.png" alt="shape" />
                <img src="/images/shapes/home-shape-four.png" alt="shape" />
                <img src="/images/shapes/home-shape-three.png" alt="shape" />
            </div>
        </div>
    )
}

export default MainBanner;