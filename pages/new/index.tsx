'use strict';
import Navbar from '../../components/Nav/Navbar';

export default function newPost() {
    return (
        <>
            <Navbar />
            <form action="/api/posts/new" method="POST">
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input type="text" className="form-control" id="title" name="title" />
                </div>
                <div className="form-group">
                    <label htmlFor="content">Content</label>
                    <textarea className="form-control" id="content" name="content"></textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="content">Delete Code</label>
                    <input type="text" className="form-control" id="delete_keyword" name="delete_keyword" />
                </div>
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </form>
        </>
    );
}
