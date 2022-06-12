'use strict';

import Router from 'next/router';

const RecentFeed: React.FC<{ post: object }> = ({ post }) => {
    function reportPost() {
        return Router.push(`/report?id=${post._id}`);
    }

    console.log(post);

    return (
        <>
            <h1 className="text-white text-center ">View Post</h1>
            <div className="container mt-4 mb-2 ">
                <div className="d-flex justify-content-center row">
                    <div className="col-md-8">
                        <div className="feed p-2">
                            <div className="bg-white border mt-2" style={{ borderRadius: '.5rem' }}>
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
                            </div>
                            <div
                                className="d-flex flex-row justify-content-between align-items-center p-2 bg-black "
                                style={{ borderRadius: '.5rem' }}
                            >
                                <div className="feed-text px-2">
                                    <h6 className="mt-2" style={{ color: '#ffb6da' }} onClick={reportPost}>
                                        Report this post
                                    </h6>
                                </div>
                                <div className="feed-icon px-2">
                                    <i className="fa fa-long-arrow-up text-black-50"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default RecentFeed;
