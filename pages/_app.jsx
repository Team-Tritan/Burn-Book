'use strict';

import SSRProvider from 'react-bootstrap/SSRProvider';
import Navbar from '../components/Nav/Navbar';
import Footer from '../components/Nav/Footer';

function BurnBook({ Component, pageProps }) {
    return (
        <SSRProvider>
            <Navbar />
            <div className="d-flex justify-content-md-center">
                <div
                    class="alert alert alert-dismissible show text-center"
                    style={{ backgroundColor: '#ff8da1', color: 'white' }}
                    role="alert"
                >
                    <strong>We are currently in a very early beta!</strong> Please join our{' '}
                    <a style={{ textDecoration: 'none' }} href="https://discord.gg/http">
                        discord server
                    </a>{' '}
                    for feedback or support.
                </div>
            </div>
            <Component {...pageProps} />
            <Footer />
        </SSRProvider>
    );
}

export default BurnBook;
