'use strict';

import { useRouter } from 'next/router';
import Navbar from '../../components/Nav/Navbar';

const viewPost = async () => {
    const router = useRouter();
    const { id } = router.query;

    const res = await fetch(`/api/fetch?id=${id}`);
    const api = await res.json();

    return (
        <>
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1>{api.title}</h1>
                        <p>{api.content}</p>
                        <p>{api.createdAt}</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default viewPost;
