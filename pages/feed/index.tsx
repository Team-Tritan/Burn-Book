'use strict';

import { useEffect, useState } from 'react';
import Navbar from '../../components/Nav/Navbar';
import Feed from '../../components/Feed/Feed';

export default function viewFeed() {
    // useState to manage data fetching with useEffect
    const [data, setData] = useState(null);

    // Lazy page loading
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`/api/posts/fetch?limit=3`);
            const newData = await response.json();
            setData(newData);
            setIsLoading(false);
        };

        fetchData();
    }, [data]);

    // Return nav bar if loading
    if (isLoading) {
        return <Navbar />;
    }

    // Return UI, passing data to Feed component
    return (
        <>
            <Navbar />
            <Feed data={data} />
        </>
    );
}
