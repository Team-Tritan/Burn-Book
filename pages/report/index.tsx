'use strict';

import { useRouter } from 'next/router';
import Error from '../../components/Hero/Error';
import axios from 'axios';

const ReportPost: React.FC = () => {
    const router = useRouter();
    const { id } = router.query;

    if (!id) {
        return (
            <>
                <Error
                    name="Report Failure"
                    code="400"
                    message="You have tried to submit a report with an invalid id parameter. Please check the URL and try again."
                />
            </>
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
            <Error
                name={'Report Submitted'}
                message={
                    'Your report has been successfully submitted and the post has been removed until further review.'
                }
                code={null}
            />
        </>
    );
};

export default ReportPost;
