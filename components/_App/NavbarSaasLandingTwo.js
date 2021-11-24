import React, { Component } from 'react';
import Link from 'next/link';

class NavbarSaasLandingTwo extends Component {
    state = {
        collapsed: true,
        sidebarModal: false,
        logo: 'logo-w'
    };

    toggleNavbar = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }

    // Sidebar Modal
    toggleModal = () => {
        this.setState({
            sidebarModal: !this.state.sidebarModal
        });
    }

    componentDidMount() {
        this._isMounted = true;
        let elementId = document.getElementById("navbar");
        document.addEventListener("scroll", () => {
            if (window.scrollY > 170) {
                elementId.classList.add("is-sticky");
                this.setState({logo:'logo'})
            } else {
                elementId.classList.remove("is-sticky");
                this.setState({logo:'logo-w'})
            }
        });
        window.scrollTo(0, 0);

        // this.menuActiveClass()
    }

    // menuActiveClass = () => {
    //     let mainNavLinks = document.querySelectorAll(".navbar-nav li a");
    //     window.addEventListener("scroll", () => {
    //         let fromTop = window.scrollY;
    //         mainNavLinks.forEach(link => {
    //             if (link.hash){
    //                 let section = document.querySelector(link.hash);
            
    //                 if (
    //                     section.offsetTop <= fromTop &&
    //                     section.offsetTop + section.offsetHeight > fromTop
    //                 ) {
    //                     link.classList.add("active");
    //                 } else {
    //                     link.classList.remove("active");
    //                 }
    //             }
    //         });
    //     });
    // }

    render() {
        const { collapsed } = this.state;
        const classOne = collapsed ? 'collapse navbar-collapse' : 'navbar-collapse collapse show';
        const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';
        return (
            <>
                <nav id="navbar" className="navbar navbar-expand-md navbar-light navbar-area">
                    <div className="container">
                        <Link href="/">
                            <a className="navbar-brand">
                                <img src={`/images/${this.state.logo}.png`} alt="logo" />
                            </a>
                        </Link>

                        <button 
                            onClick={this.toggleNavbar}
                            className={classTwo} 
                            type="button" 
                            data-toggle="collapse" 
                            data-target="#navbarSupportedContent" 
                            aria-controls="navbarSupportedContent" 
                            aria-expanded="false" 
                            aria-label="Toggle navigation"
                        >
                            <span className="icon-bar top-bar"></span>
                            <span className="icon-bar middle-bar"></span>
                            <span className="icon-bar bottom-bar"></span>
                        </button>
                  
                        <div className={classOne} id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item">
                                    <Link 
                                        // onClick={this.toggleNavbar} 
                                        offset={() => 100} 

                                        href="/"
                                    >
                                        <a
                                            className={`nav-link ${this.props.selected === 'dispensaries' ? 'active' : ''}`} 
                                        >
                                            Dispensaries
                                        </a>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link 
                                        // onClick={this.toggleNavbar} 
                                        offset={() => -1} 
                                        href="/deliveries"
                                    >
                                        <a
                                            className={`nav-link ${this.props.selected === 'deliveries' ? 'active' : ''}`} 
                                        >
                                            Deliveries
                                        </a>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link 
                                        // onClick={this.toggleNavbar} 
                                        offset={() => -1} 
                                        href="/brands"
                                    >
                                        <a
                                            className={`nav-link ${this.props.selected === 'brands' ? 'active' : ''}`}  
                                        >
                                            Brands
                                        </a>
                                    </Link>
                                </li>
                                {/* <li className="nav-item">
                                    <AnchorLink 
                                        onClick={this.toggleNavbar} 
                                        offset={() => -1} 
                                        className="nav-link" 
                                        href="#pricing"
                                    >
                                        Pricing
                                    </AnchorLink>
                                </li>
                                <li className="nav-item">
                                    <AnchorLink 
                                        onClick={this.toggleNavbar} 
                                        offset={() => -1} 
                                        className="nav-link" 
                                        href="#testimonials"
                                    >
                                        Testimonials
                                    </AnchorLink>
                                </li> */}
                            </ul>

                            <div className="navbar-btn">
                                <Link href="/register">
                                    <a>Sign Up</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </nav>  

            </>
        );
    }
}

export default NavbarSaasLandingTwo;
