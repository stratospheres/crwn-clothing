import React from 'react';
import './HomePage.styles.scss';
import { Directory } from '../../Components/Directory/Directory.component';

export const HomePage = () => (
    <div className="homepage">
        <Directory />
    </div>
);

// See https://blog.neufund.org/why-we-have-banned-default-exports-and-you-should-do-the-same-d51fdc2cf2ad
// export default HomePage;