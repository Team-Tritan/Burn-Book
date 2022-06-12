'use strict';

//import "../styles/globals.css";
import SSRProvider from 'react-bootstrap/SSRProvider';


function BurnBook({ Component, pageProps }) {
    return (
        <SSRProvider>
            <Component {...pageProps} />
        </SSRProvider>
    );
}

export default BurnBook;
