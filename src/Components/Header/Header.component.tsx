import React from 'react';
import { Link } from 'react-router-dom';

// this is magic, from a special webpack loader which can convert this to a React component.
// See https://create-react-app.dev/docs/adding-images-fonts-and-files/ for details
// but note that part of this magic comes courtesy of create-react-app
import { ReactComponent as Logo } from '../../Assets/crown.svg';

import { Auth } from '../../Firebase/Firebase.utils';

import './Header.styles.scss';

export interface HeaderProps {
    User: firebase.User | null;
}

export const Header = ({ User } : HeaderProps) => {

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
                {
                    User ?
                    <div className="option" onClick={() => Auth.signOut()}>
                        SIGN OUT {User.email}
                    </div> :
                    <Link className="option" to="/signin">
                        SIGN IN
                    </Link>
                }
            </div>
        </div>  
    );
}