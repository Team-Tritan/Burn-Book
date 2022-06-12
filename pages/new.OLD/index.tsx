'use strict';
import Navbar from '../../components/Nav/Navbar';

export default function newPost() {
    return (
        <>
            <Navbar />
            <div className="container ">
                <div className="row">
                    <div className="col-md-8 offset-md-2 mt-4">
                        <h1 className="text-white text-center ">New Post</h1>
                        <form action="/api/posts/create" method="POST" className="text-white">
                            <div className="form-group mt-4">
                                <label>Author Username</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="title"
                                    name="title"
                                    aria-describedby="titleHelp"
                                    placeholder="Enter @"
                                    style={{ borderRadius: '.5rem' }}
                                />
                                <small id="titleHelp" className="form-text text-muted">
                                    This is the username of the author of the post.
                                </small>
                            </div>
                            <div className="form-group mt-4">
                                <label>Post Content</label>
                                <textarea
                                    className="form-control"
                                    id="content"
                                    name="content"
                                    placeholder="What's on your mind?"
                                    required
                                    style={{ borderRadius: '.5rem' }}
                                />
                            </div>
                            <div className="form-group mt-4">
                                <label>Delete Keyword</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="delete_keyword"
                                    name="delete_keyword"
                                    aria-describedby="keywordHelp"
                                    placeholder="Enter password"
                                    required
                                    style={{ borderRadius: '.5rem' }}
                                />
                                <small id="keywordHelp" className="form-text text-muted">
                                    You will need to enter this password if you'd like to remove your post.
                                </small>
                            </div>
                            <button
                                type="submit"
                                className="btn btn-light px-4 me-lg-5 mt-4"
                                style={{ borderColor: '#ffb6da', backgroundColor: '#ffb6da', borderRadius: '.5rem' }}
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
