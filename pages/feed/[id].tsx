'use strict';

import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Navbar from '../../components/Nav/Navbar';

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
        </>
    );
}

