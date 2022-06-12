'use strict';

import Router from 'next/router';

export default function mainHero({ code, name, message }) {
    function Redirect() {
        return Router.push('/');
    }

    return (
        <div className="container col-xxl-8 px-4 py-5">
            <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                <div className="col-10 col-sm-8 col-lg-6">
                    <img
                        src="/error.png"
                        className="d-block mx-lg-auto img-fluid"
                        alt="Bootstrap Themes"
                        width="300"
                        height="300"
                        loading="lazy"
                    />
                </div>
                <div className="col-lg-6">
                    <h1 className="display-5 fw-bold text-white lh-1 mb-3">
                        Error {code}: {name}
                    </h1>

                    <p className="lead text-white mb-4">{message}</p>
                    <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                        <button
                            type="button"
                            onClick={Redirect}
                            className="btn btn-outline-light btn-lg px-4 me-sm-3"
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
