import React from 'react';
import {useSelector} from 'react-redux';
import {getItems, getItemsLoadingStatus} from '../../store/itemsSlice';
import ItemPreviewCard from '../../components/ItemPreviewCard/ItemPreviewCard';
import styles from './CardsCatalogBlock.module.scss';

const CardsCatalogBlock = () => {
  const items = useSelector(getItems());
  const isItemsLoading = useSelector(getItemsLoadingStatus());

  let newArrivalItems = [];

  if (!isItemsLoading) {
    newArrivalItems = items;
  }

  return (
    <div className={styles.catalog}>
      <ul className={styles.cards}>
        {newArrivalItems.map((item) => (
          <li key={item.name}>
            <ItemPreviewCard item={item} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CardsCatalogBlock;
