import React, {useState} from 'react';
import SHOP_DATA, { ShopDataSection } from './ShopPage.data';
import CollectionPreview from '../../Components/CollectionPreview/CollectionPreview.component';

export const ShopPage = () => {
  const [collections, setCollections] = useState(SHOP_DATA);

  return (
    <div className="shop-page">
      {
        collections.map(
          ({ id, ...otherCollectionProps}: ShopDataSection) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))
      }
    </div>
  );
};

export default ShopPage;