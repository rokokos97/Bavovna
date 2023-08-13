import React from 'react';
import styles from './MainPage.module.scss';
import ItemPreviewCard from '../../components/ItemPreviewCard/ItemPreviewCard';
import {useSelector} from 'react-redux';
import {getItems, getItemsLoadingStatus} from '../../store/itemsSlice';

const MainPage = () => {
  const items = useSelector(getItems());
  const isLoading = useSelector(getItemsLoadingStatus());
  return (
    <>
      <div className={styles.mainPage} data-testid="MainPage">
        <div className={styles.newCollectionBlock}>
          <p className={styles.newCollection}>
            new collection
          </p>
          <p className={styles.manifest}>
            Together, we can transform the way we consume
            and create a brighter, greener future for generations to come
          </p>
          <button className={styles.buttons}>
            <span className={styles.buttonText}>shop now</span>
          </button>
        </div>
      </div>
      {!isLoading && <ItemPreviewCard item={items[0]}/>}
    </>
  );
};

export default MainPage;
