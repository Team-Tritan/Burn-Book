'use strict';

import { useEffect, useState } from 'react';
import Navbar from '../../components/Nav/Navbar';
import Recent from '../../components/Feed/Feed';

export default function viewFeed() {
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
            <Recent data={data} />
        </>
    );
}
