'use strict';

import { useEffect, useState } from 'react';
import Router from 'next/router';
import Navbar from '../../components/Nav/Navbar';

function createPost() {
    return Router.push('/new');
}

export default function viewFeed() {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`/api/posts/fetch?limit=50/`);
            const newData = await response.json();
            setData(newData);
        };

        fetchData();
    });

    return (
        <>
            <Navbar />

            <h1 className="text-white text-center ">Recent Feed</h1>
            {data &&
                data.map((post) => (
                    <div className="container mt-4 mb-5">
                        <div className="d-flex justify-content-center row">
                            <div className="col-md-8">
                                <div className="feed p-2">
                                    <div className="d-flex flex-row justify-content-between align-items-center p-2 bg-white border">
                                        <div className="feed-text px-2">
                                            <h6 className="text-black-50 mt-2" onClick={createPost}>
                                                What's on your mind?
                                            </h6>
                                        </div>
                                        <div className="feed-icon px-2">
                                            <i className="fa fa-long-arrow-up text-black-50"></i>
                                        </div>
                                    </div>
                                    <div className="bg-white border mt-2">
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
                                            <a href={`/feed/${post._id}`}>View Post</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
        </>
    );
}
