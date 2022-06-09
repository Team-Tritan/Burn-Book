//import "../styles/globals.css";
import { SSRProvider } from '@react-aria/ssr';

function BurnBook({ Component, pageProps }) {
    return (
        <SSRProvider>
            <Component {...pageProps} />
        </SSRProvider>
    );
}

export default BurnBook;
