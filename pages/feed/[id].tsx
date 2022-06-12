'use strict';

import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Navbar from '../../components/Nav/Navbar';
import Post from '../../components/Feed/Post';
import Error from '../../components/Hero/Error';

export default function viewPost() {
    const router = useRouter();
    const { id } = router.query;

    const [postData, setPostData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`/api/posts/fetch?id=${id}`);

            if (response.status !== 200) {
                return (
                    <Error
                        name="Post Not Found"
                        code="404"
                        message="The post you are trying to view does not exist. Please check the URL and try again."
                    />
                );
            }

            const newData = await response.json();

            setPostData(newData);
            setIsLoading(false);
        };

        fetchData();
    }, [id]);

    if (isLoading) {
        return <Navbar />;
    }

    return (
        <>
            <Navbar />
            <Post post={postData} />
        </>
    );
}
