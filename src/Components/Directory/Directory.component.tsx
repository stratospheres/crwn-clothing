import React, { useState } from 'react';
import './Directory.styles.scss';
import MenuItem from '../MenuItem/MenuItem.component';
import { string } from 'prop-types';

export interface DirectorySection {
    title: string;
    imageUrl: string;
    size?: string;
    id: number;
    linkUrl: string; 
}

export interface DirectoryData {
    sections: DirectorySection[];
}

export const Directory = () => {

    const [data, setData] = useState({
        sections : [
            {
              title: 'hats',
              imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
              id: 1,
              linkUrl: 'shop/hats'
            },
            {
              title: 'jackets',
              imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
              id: 2,
              linkUrl: 'shop/jackets'
            },
            {
              title: 'sneakers',
              imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
              id: 3,
              linkUrl: 'shop/sneakers'
            },
            {
              title: 'womens',
              imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
              size: 'large',
              id: 4,
              linkUrl: 'shop/womens'
            },
            {
              title: 'mens',
              imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
              size: 'large',
              id: 5,
              linkUrl: 'shop/mens'
            }
          ]
    });

    return (
        <div className="directory-menu">
            {
                data.sections.map(({title, imageUrl, id, linkUrl, size} : DirectorySection)  => (
                    <MenuItem key={id} title={title} subtitle="BUY NOW" imageUrl={imageUrl} size={size} />
                ))
            }
        </div>
    );
}

export default Directory;