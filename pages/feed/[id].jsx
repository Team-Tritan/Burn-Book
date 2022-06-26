'use strict';

import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Post from '../../components/Feed/SinglePost';
import Error from '../../components/Hero/Error';
import Spinner from '../../components/Feed/Spinner';
import axios from 'axios';
import CommendsFeed from '../../components/Feed/CommentFeed';

const ViewPost = () => {
    // Use the router to grab req.query
    const router = useRouter();
    const { id } = router.query;

    // Use useState to manage data fetching with useEffect
    const [postData, setPostData] = useState(null);
    const [comments, setComments] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!id) return;

        const fetchData = async () => {
            // Reach out to the API to get the post data
            const response = await axios
                .get(`/api/posts/fetch?id=${id}`)
                .then((res) => res.data)
                .catch((err) => {
                    if (err?.response?.data) {
                        setError(err.response.data.error);
                    } else {
                        setError('Failed to get data!');
                    }
                });

            // Set the data into state, disable isLoading
            setPostData(response);
            setComments(response.comments);
            setIsLoading(false);
        };

        // Init
        fetchData();
    }, [id, setPostData, comments, setComments, setIsLoading, setError]);

    // Return nav bar if loading
    if (isLoading) {
        return (
            <>
                <Spinner />
            </>
        );
    }
    if (error)
        return (
            <Error
                name="Post Not Found"
                code="404"
                message="The post you are trying to view does not exist. Please check the URL and try again."
            />
        );

    // Return UI, passing data to Post component
    return (
        <>
            <Post post={postData} />
            <CommendsFeed comments={comments} />
        </>
    );
};

export default ViewPost;
