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

export default CollectionItem;