'use strict';

import Router from 'next/router';

export default function mainHero() {
    function createPost() {
        return Router.push('/new');
    }

    function viewFeed() {
        return Router.push('/feed');
    }

    return (
        <div className="container col-xxl-8 px-4 py-5">
            <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                <div className="col-10 col-sm-8 col-lg-6">
                    <img
                        src="/icon.png"
                        className="d-block mx-lg-auto img-fluid"
                        alt="Bootstrap Themes"
                        width="250"
                        height="250"
                        loading="lazy"
                    />
                </div>
                <div className="col-lg-6">
                    <h1 className="display-5 fw-bold text-white lh-1 mb-3">Burn Book</h1>
                    <p className="lead text-white">
                        eBurnBook is a social media platform for people to share stories specifically meant for tea
                        spilling. The idea comes from the iconic movie, <i>Mean Girls</i>.
                    </p>
                    <p className="lead text-white mb-3">
                        Keep in mind that this site is not meant to endorce bullying in any way. Visiters who constantly
                        leave hatespeech will be banned.
                    </p>
                    <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                        <button
                            type="button"
                            onClick={createPost}
                            className="btn btn-light px-4 me-lg-5"
                            style={{ borderColor: '#ffb6da', backgroundColor: '#ffb6da' }}
                        >
                            Create Post
                        </button>

                        <a onClick={viewFeed} className="px-4 py-2" style={{ textDecoration: 'none', color: 'white' }}>
                            View Feed
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
