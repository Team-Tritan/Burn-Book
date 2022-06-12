'use strict';

import axios from 'axios';
import Router from 'next/router';

export default function sex() {
    async function createComment() {
        alert('Coming soon!');
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <div className="feed p-2">
                        <div
                            className="d-flex flex-row justify-content-between align-items-center p-1 bg-white border py-1"
                            onClick={createComment}
                            style={{ borderRadius: '.5rem' }}
                        >
                            <div className="feed-text px-2">
                                <h6 className="text-black-50 mt-2">Leave a comment</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
