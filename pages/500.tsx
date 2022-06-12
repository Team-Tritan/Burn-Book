'use strict';

import Navbar from '../components/Nav/Navbar';
import ErrorHero from '../components/Hero/Error';

export default function ErrorHandler() {
    return (
        <>
            <Navbar />
            <ErrorHero
                code={'500'}
                name={'Internal Server Error'}
                message={
                    "Oh my fucking god, you broke something. Are you happy now? Now we gotta look into it, it's a whole thing. Thanks, thank you so much."
                }
            />
        </>
    );
}
