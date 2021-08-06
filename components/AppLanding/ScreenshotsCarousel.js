import React from 'react';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    loop:true,
    margin:30,
    nav:false,
    dots:true,
    center:true,
    responsive:{
        0:{
            items: 2,
            margin: 20,
        },
        600:{
            items: 3
        },
        768:{
            items: 3
        },
        1000:{
            items: 5
        }
    }
};

const ScreenshotsCarousel = () => {
    const [display, setDisplay] = React.useState(false);

    React.useEffect(() => {
        setDisplay(true);
    }, [])

    return (
        <div id="screenshots" className="screenshots-section pt-100">
            <div className="container-fluid">
                <div className="section-title">
                    <span>Screenshots</span>
                    <h2>Have a Look at Our App Interface</h2>
                    <p>Grab a look at our outstanding and stunning App Interfaces which is easy to use and very easily manageable.</p>
                </div>

                {display ? <OwlCarousel 
                    className="screenshot-slider owl-carousel owl-theme"
                    {...options}
                >
                    <div className="screenshoot-img">
                        <img src="/images/app-landing/app-screenshot1.png" alt="app screenshot" />
                    </div>

                    <div className="screenshoot-img">
                        <img src="/images/app-landing/app-screenshot2.png" alt="app screenshot" />
                    </div>

                    <div className="screenshoot-img">
                        <img src="/images/app-landing/app-screenshot3.png" alt="app screenshot" />
                    </div>

                    <div className="screenshoot-img">
                        <img src="/images/app-landing/app-screenshot4.png" alt="app screenshot" />
                    </div>

                    <div className="screenshoot-img">
                        <img src="/images/app-landing/app-screenshot5.png" alt="app screenshot" />
                    </div>

                    <div className="screenshoot-img">
                        <img src="/images/app-landing/app-screenshot3.png" alt="app screenshot" />
                    </div>
                </OwlCarousel> : ''}

                <div className="screenshot-shape">
                    <img src="/images/shapes/shape1.png" alt="shape" />
                    <img src="/images/shapes/shape2.png" alt="shape" />
                    <img src="/images/shapes/shape3.png" alt="shape" />
                    <img src="/images/shapes/shape4.png" alt="shape" />
                    <img src="/images/shapes/shape5.png" alt="shape" />
                    <img src="/images/shapes/shape6.png" alt="shape" />
                </div>
            </div>
        </div>
    )
}

export default ScreenshotsCarousel;