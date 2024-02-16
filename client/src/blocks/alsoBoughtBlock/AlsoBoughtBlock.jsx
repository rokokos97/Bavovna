import React from 'react';
import {useSelector} from 'react-redux';
import {getItems, getItemsLoadingStatus} from '../../store/itemsSlice';
import ItemPreviewCard from '../../components/itemPreviewCard/ItemPreviewCard';
import styles from './AlsoBoughtBlock.module.scss';

const AlsoBoughtBlock = () => {
  const items = useSelector(getItems());
  const isItemsLoading = useSelector(getItemsLoadingStatus());
  let alsoBought = [];

  if (!isItemsLoading) {
    alsoBought = [...items];
    alsoBought.length = 3;
  }

  return (
    <div className={styles.alsoBought} data-testid='AlsoBoughtBlock'>
      <h2 className={styles.alsoBoughtTitle}>You might also like</h2>
      {!isItemsLoading && (
        <ul className={styles.alsoBoughtList}>
          {alsoBought.map((item) => (
            <li key={item._id}>
              <ItemPreviewCard id={item._id} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AlsoBoughtBlock;
