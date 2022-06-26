'use strict';

import { useEffect, useState } from 'react';
import Feed from '../../components/Feed/Feed';
import Spinner from '../../components/Feed/Spinner';

const viewFeed = ({ posts }) => {
    // Return UI, passing data to Feed component
    return (
        <>
            <Feed data={posts} />
        </>
    );
};

viewFeed.getInitialProps = async (ctx) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/api/posts/fetch?limit=3`);
    const postData = await response.json();

    return {
        posts: postData,
    };
};

export default viewFeed;
