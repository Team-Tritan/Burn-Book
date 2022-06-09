'use strict';

import Router from 'next/router';

export default function mainHero({ code, name, message }) {
    function Redirect() {
        return Router.push('/');
    }

    return (
        <div className="text-secondary px-4 py-5 text-center mt-5" style={{ backgroundColor: '#040305' }}>
            <div className="py-5">
                <h1 className="display-5 fw-bold text-white mb-5">
                    <span style={{ color: '#ffb6da' }}>
                        Error {code}: {name}
                    </span>
                </h1>
                <div className="col-lg-6 mx-auto">
                    <p className="fs-5 mb-4 text-grey">{message}</p>
                    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                        <button
                            type="button"
                            onClick={Redirect}
                            className="btn btn-outline-light btn-lg px-4 me-sm-3 mt-5"
                            style={{ borderColor: '#ffb6da' }}
                        >
                            Go Back
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
