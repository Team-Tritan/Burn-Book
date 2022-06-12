'use strict';

import Script from 'next/Script';

export function removeDaThing() {
    setTimeout(() => {
        if (document.getElementById('spinner') && document.getElementById('text')) {
            document.getElementById('text').innerHTML =
                'Our robots could not find the page you requested.<br />It may have been moved, deleted, or never existed in the first place.<br /> <br /> ';

            document.getElementById('spinner').style.display = 'none';
        }
    }, 3000);
}

export default function LoadingSpinner() {
    return (
        <>
            <br />
            <br />
            <br />
            <div className="d-flex justify-content-center">
                <div className="text-center">
                    <div
                        className="spinner-border"
                        id="spinner"
                        role="status"
                        style={{ width: '3rem', height: '3rem', color: '#ffb6da' }}
                    ></div>
                    <h3 id="text" className="text-white mt-3">
                        Talking to the robots...
                    </h3>
                </div>
            </div>
            {removeDaThing()}
        </>
    );
}
