'use strict';

import Router from 'next/router';

function createPost() {
    return Router.push('/new');
}

export default function RecentFeed({ data }) {
    return (
        <>
            <h1 className="text-white text-center ">Recent Feed</h1>

            <div className="container mb-3 ">
                <div className="d-flex justify-content-center row">
                    <div className="col-md-8">
                        <div className="feed p-2">
                            <div
                                className="d-flex flex-row justify-content-between align-items-center p-2 bg-white border"
                                style={{ borderRadius: '.5rem' }}
                            >
                                <div className="feed-text px-2">
                                    <h6 className="text-black-50 mt-2" onClick={createPost}>
                                        What's on your mind?
                                    </h6>
                                </div>
                                <div className="feed-icon px-2">
                                    <i className="fa fa-long-arrow-up text-black-50"></i>
                                </div>
                            </div>

                            {data &&
                                data.map((post) => (
                                    <div className="bg-white border mt-3" style={{ borderRadius: '.5rem' }}>
                                        <div>
                                            <div className="d-flex flex-row justify-content-between align-items-center p-2 border-bottom">
                                                <div className="d-flex flex-row align-items-center feed-text px-2">
                                                    <div className="d-flex flex-column flex-wrap ml-2">
                                                        <span className="font-weight-bold">{post.title}</span>
                                                        <span className="text-black-50 time">{post.createdAt}</span>
                                                    </div>
                                                </div>
                                                <div className="feed-icon px-2">
                                                    <i className="fa fa-ellipsis-v text-black-50"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="p-2 px-3">
                                            <span>{post.content}</span>
                                        </div>
                                        <div className="d-flex justify-content-end socials p-2 py-3">
                                            <a
                                                className="btn btn-light px-4 me-lg-5 mt-4"
                                                style={{
                                                    borderColor: '#ffb6da',
                                                    backgroundColor: '#ffb6da',
                                                    borderRadius: '.5rem',
                                                }}
                                                href={`/feed/${post._id}`}
                                            >
                                                View Post
                                            </a>
                                        </div>
                                    </div>
                                ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
