'use strict';

import { useRouter } from 'next/router';
import Navbar from '../../components/Nav/Navbar';

const viewFeed = async () => {
    const res = await fetch(`/api/posts/fetch?limit=50`);
    const api = await res.json();
    
    // doing a little trolling
    // at the time of writing
    // dylan is working on this
    // and making commits
    // so he's going to (maybe) get a merge
    // conflict when he commits
    
    const postList = api.map((post) => {
        return (
            <>
                <li>{post.title}</li>
                <li>{post.content}</li>
                <li>{post.createdAt}</li>
            </>
        );
    });

    return (
        <>
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col-md-12"></div>
                    {postList}
                </div>
            </div>
        </>
    );
};

export default viewFeed;
