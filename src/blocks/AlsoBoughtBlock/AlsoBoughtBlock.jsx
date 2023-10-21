import React from 'react';
import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {getItems, getItemsLoadingStatus} from '../../store/itemsSlice';
import ItemPreviewCard from '../../components/ItemPreviewCard/ItemPreviewCard';
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
            <Link key={item._id} to={`/catalogue/${item._id}`}>
              <li>
                <ItemPreviewCard id={item._id} />
              </li>
            </Link>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AlsoBoughtBlock;
