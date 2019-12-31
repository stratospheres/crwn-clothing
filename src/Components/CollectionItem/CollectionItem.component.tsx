import React from 'react';
import { ShopDataItem, ShopDataSection } from '../../Pages/ShopPage/ShopPage.data';

import './CollectionItem.styles.scss';

// instead of inheriting and a blank body, type equivalence seems cleaner`

type CollectionItemProps = ShopDataItem;

export const CollectionItem = 
    ({id, name, price, imageUrl} : CollectionItemProps ) => (
        <div className="collection-item">
            <div
                className="image"
                style={{
                    backgroundImage: `url(${imageUrl})`
                }}
                />
            <div className="collection-footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
        </div>
    );

// see https://blog.neufund.org/why-we-have-banned-default-exports-and-you-should-do-the-same-d51fdc2cf2ad
//export default CollectionItem;