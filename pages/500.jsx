'use strict';

import ErrorHero from '../components/Hero/Error';

const Error500 = () => {
    return (
        <>
            <ErrorHero
                code={'500'}
                name={'Internal Server Error'}
                message={
                    "Oh my fucking god, you broke something. Are you happy now? Now we gotta look into it, it's a whole thing. Thanks, thank you so much."
                }
            />
        </>
    );
};

export default Error500;
