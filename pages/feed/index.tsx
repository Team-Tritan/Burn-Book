'use strict';

import { useRouter } from 'next/router';
import Navbar from '../../components/Nav/Navbar';

const viewFeed = async () => {
    const router = useRouter();
    const { id } = router.query;

    const res = await fetch(`/api/fetch?limit=50`);
    const api = await res.json();

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
