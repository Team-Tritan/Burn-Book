'use strict';

import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Navbar from '../../components/Nav/Navbar';
import Post from '../../components/Feed/SinglePost';
import Error from '../../components/Hero/Error';
import Spinner from '../../components/Feed/Spinner';

export default function viewPost() {
    // Use the router to grab req.query
    const router = useRouter();
    const { id } = router.query;

    // Use useState to manage data fetching with useEffect
    const [postData, setPostData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            // Reach out to the API to get the post data
            const response = await fetch(`/api/posts/fetch?id=${id}`);

            // If the post doesn't exist, return an error
            if (response.status !== 200) {
                return (
                    <Error
                        name="Post Not Found"
                        code="404"
                        message="The post you are trying to view does not exist. Please check the URL and try again."
                    />
                );
            }

            // Format into JSON
            const newData = await response.json();

            // Set the data into state, disable isLoading
            setPostData(newData);
            setIsLoading(false);
        };

        // Init
        fetchData();
    }, [id]);

    // Return nav bar if loading
    if (isLoading) {
        return (
            <>
                <Navbar />
                <Spinner />
            </>
        );
    }

    if (!isLoading) {
        // Return UI, passing data to Post component
        return (
            <>
                <Navbar />
                <Post post={postData} />
            </>
        );
    }
}
