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
        <div className="text-secondary px-4 py-5 text-center" style={{ backgroundColor: '#040305' }}>
            <div className="py-5">
                <h1 className="display-5 fw-bold text-white">
                    <span style={{ color: '#ffb6da' }}>Burn Book</span>: A Digital Version
                </h1>
                <div className="col-lg-6 mx-auto">
                    <p className="fs-5 mb-4 text-grey mt-5">
                        We decided to bring to live the burn book from mean girls, because honestly I think we all need
                        something like it lol.
                    </p>
                    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mt-5">
                        <button
                            type="button"
                            onClick={createPost}
                            className="btn btn-outline-light btn-lg px-4 me-sm-3"
                            style={{ borderColor: '#ffb6da' }}
                        >
                            Create Post
                        </button>
                        <button
                            type="button"
                            onClick={viewFeed}
                            className="btn btn-outline-light btn-lg px-4"
                            style={{ borderColor: '#ffb6da' }}
                        >
                            View Feed
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
