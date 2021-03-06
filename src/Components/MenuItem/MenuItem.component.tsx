import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';

import './MenuItem.styles.scss';
// To understand the deeper stuff in react-router-dom in Typescript, see:
// https://www.dev-eth0.de/2019/09/10/using-withrouter-in-a-typescript-react-component/

// the "extends RouteComponentProps" gives us access to the guts
// of the router so that we can do stuff with history
export interface MenuItemProps extends RouteComponentProps{
    title: string;
    imageUrl?: string;
    size?: string;
    linkUrl: string;
}

export const MenuItemInternal = 
    // access to the history and match props is from the RouteComponentProps inheritance
    ({ title, imageUrl, size, linkUrl, history, match }: MenuItemProps) => (
    <div className={`${size} menu-item`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
        <div className='background-image' style={{
            backgroundImage: `url("${imageUrl}")`
        }} />
        <div className="content">
            <h1 className="title">{title.toUpperCase()}</h1>
            <span className="subtitle">SHOP NOW</span>
        </div>
    </div>
);

// getting an error on the type here? 
// see https://www.dev-eth0.de/2019/09/10/using-withrouter-in-a-typescript-react-component/

// Wondering why we alias this out? We don't use "default" exports, but need to 
// wrap this export in the "withRouter" call. See https://blog.neufund.org/why-we-have-banned-default-exports-and-you-should-do-the-same-d51fdc2cf2ad
export const MenuItem = withRouter(MenuItemInternal); 

