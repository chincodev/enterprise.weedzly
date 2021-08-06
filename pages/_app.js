import '../public/css/bootstrap.min.css'
import '../public/css/animate.css'
import '../public/css/icofont.min.css'
import '../public/css/flaticon.css'
import '../node_modules/react-modal-video/css/modal-video.min.css'
import '../public/css/style.css'
import '../public/css/responsive.css'

import Layout from '../components/_App/Layout';

const MyApp =  ({ Component, pageProps }) => {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    )
}

export default MyApp