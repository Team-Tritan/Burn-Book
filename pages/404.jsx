'use strict';

import ErrorHero from '../components/Hero/Error';

const Error404 = () => {
    return (
        <>
            <ErrorHero
                code={'404'}
                name={'Resource Not Found'}
                message={
                    'The requested content could not be found on the server. It may have been moved, deleted, or never existed in the first place. Who knows? Not us ¯_(ツ)_/¯'
                }
            />
        </>
    );
};

export default Error404;
