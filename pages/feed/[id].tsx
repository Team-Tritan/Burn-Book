'use strict';

import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Navbar from '../../components/Nav/Navbar';
import Post from '../../components/Feed/Post';

export default function viewPost() {
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
            <Post data={data} />
        </>
    );
}
