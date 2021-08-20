import React from 'react'
import Head from "next/head"
import GoTop from './GoTop'
import Preloader from './Preloader'
import { Helmet } from 'react-helmet'

const Layout = ({ children }) => {

    // Preloader
    const [loader, setLoader] = React.useState(true);

    React.useEffect(() => {
        setTimeout(() => setLoader(false), 1500);
    }, [])

    return(
        <>
            <Helmet>
                <title>Weedzly Enterprise </title>
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <meta name="description" content="Weedzly Enterprise - Solutions for Cannabis Businesses" />
                <meta name="og:title" property="og:title" content="Weedzly Enterprise - Solutions for Cannabis Businesses"></meta>
                <meta name="twitter:card" content="Weedzly Enterprise - Solutions for Cannabis Businesses"></meta>
                <link rel="canonical" href="https://enterprise.weedzly.com/"></link>
            </Helmet>

            {children}

            {loader ? <Preloader /> : null}
        
            <GoTop scrollStepInPx="100" delayInMs="10.50" />
        </>
    );
}

export default Layout;