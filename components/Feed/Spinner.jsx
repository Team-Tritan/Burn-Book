'use strict';

import Script from 'next/script';

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
        </>
    );
}
