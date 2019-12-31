import React, {useState} from 'react';
import SHOP_DATA, { ShopDataSection } from './ShopPage.data';
import { CollectionPreview } from '../../Components/CollectionPreview/CollectionPreview.component';

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

// See https://blog.neufund.org/why-we-have-banned-default-exports-and-you-should-do-the-same-d51fdc2cf2ad
// export default ShopPage;
