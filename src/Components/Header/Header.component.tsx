import React from 'react';
import { Link } from 'react-router-dom';

// this is magic, from a special webpack loader which can convert this to a React component.
// See @svgr for details but the webpack config is hidden because
// this app is currently not ejected...
import { ReactComponent as Logo } from '../../Assets/crown.svg';

import './Header.styles.scss';

export const Header = () => {

    return (
        <div className="header">
            <Link className="logl-container" to="/">
                <Logo className="logo" />
            </Link>
            <div className="options">
                <Link className="option" to="/shop">
                    SHOP
                </Link>
                <Link className="option" to="/contact">
                    CONTACT
                </Link>
            </div>
        </div>  
    );
}