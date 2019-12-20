import React from 'react';
import './CollectionPreview.styles.scss';
import { ShopDataItem } from '../../Pages/ShopPage/ShopPage.data';
import { CollectionItem } from '../CollectionItem/CollectionItem.component';

export interface CollectionPreviewProps {
    title: string;
    items: ShopDataItem[];
}

// Heads up - the .filter and .map will get called
// on every render/re-render. We should clean this up later.
export const CollectionPreview = 
    ({title, items} : CollectionPreviewProps ) => (
    <div className="collection-preview"> 
        <h1 className="title">{title.toUpperCase()}</h1>
        <div className="preview">
            {
                items
                    .filter((item, index) => index < 4)
                    .map(({ id, ...itemProps})  => (
                        <CollectionItem key={id} id={id} {...itemProps} />
                ))
            }
        </div>
    </div>
);

export default CollectionPreview;
