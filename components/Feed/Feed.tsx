'use strict';

import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Alert notification laziness
const returnNotification = (message: string) => {
    return toast(`${message}`, {
        position: 'top-center',
        style: {
            background: 'black',
            borderColor: '#728cd4',
            color: 'white',
        },
    });
};

const RecentFeed: React.FC = ({ data }) => {
    // Init state
    const [posts, setPosts] = useState(data);
    const [hasMore, setHasMore] = useState(true);
    const [createPostData, setCreatePostData] = useState({
        content: '',
    });

    // Fetch more posts for endless scrolling component
    const getMorePost = async () => {
        const res = await fetch(`/api/posts/fetch?limit=10`);
        const newPosts = await res.json();
        setPosts((post) => [...post, ...newPosts]);
    };

    const createPost = async () => {
        if (!createPostData.content) {
            return returnNotification('❌ You are not able to submit blank posts.');
        }

        const res = await axios
            .post(`/api/posts/create`, createPostData)
            .then((res) => res.data)
            .catch((err) => {
                return console.log(err);
            });

        console.log(res);

        setPosts([res.data, ...posts]);

        return returnNotification('✅ Successfully posted.');
    };

    useEffect(() => {
        console.log(posts);
    }, [posts]);

    // Return UI
    return (
        <>
            <div className="container mb-3">
                <div className="d-flex justify-content-center row">
                    <div className="col-md-8 mt-2">
                        <h4 className="text-white text-left">Recent Feed</h4>
                        <div className="feed p-2">
                            <div
                                className="d-flex flex-row justify-content-between align-items-center p-1 bg-white border py-3 mb-3"
                                style={{ border: 'none', outline: 'none', borderRadius: '.5rem' }}
                            >
                                <input
                                    className="form-control text-black-50 border-0 outline-0"
                                    type="text"
                                    name="new"
                                    id="new"
                                    onChange={(e) => setCreatePostData({ ...createPostData, content: e.target.value })}
                                    placeholder="What's on your mind?"
                                ></input>

                                <a
                                    className="btn btn-light px-4 me-lg-5"
                                    style={{
                                        borderColor: '#ffb6da',
                                        backgroundColor: '#ffb6da',
                                        borderRadius: '.5rem',
                                    }}
                                    onClick={createPost}
                                >
                                    Submit
                                </a>
                                <div className="feed-icon px-2">
                                    <i className="fa fa-long-arrow-up text-black-50"></i>
                                </div>
                            </div>
                            {posts.map((post) => (
                                <div className="bg-white border mt-2 mb-3" style={{ borderRadius: '.5rem' }}>
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
            <ToastContainer />
        </>
    );
};

export default RecentFeed;
