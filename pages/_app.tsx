'use strict';

import SSRProvider from 'react-bootstrap/SSRProvider';
import Navbar from '../components/Nav/Navbar';

function BurnBook({ Component, pageProps }) {
    return (
        <SSRProvider>
            <Navbar />
            <Component {...pageProps} />
        </SSRProvider>
    );
}

export default BurnBook;
