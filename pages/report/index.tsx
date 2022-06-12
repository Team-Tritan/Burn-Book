'use strict';

import { useRouter } from 'next/router';
import Navbar from '../../components/Nav/Navbar';
import Error from '../../components/Hero/Error';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Report() {
    const router = useRouter();
    const { id } = router.query;

    if (!id) {
        return (
            <Error
                name="Report Failure"
                code="400"
                message="You have tried to submit a report with an invalid post ID. Please check the URL and try again."
            />
        );
    }

    const req = axios
        .post(`/api/report?id=${id}`, {
            id: id,
        })
        .then((res) => {
            console.log(res);
        });

    return (
        <>
            <Navbar />
            <Error
                name="Report Submitted"
                message="Your report has been successfully submitted and the post has been removed until further review."
            />
        </>
    );
}
