import React, {useState} from 'react';
import styles from './NewArrivalsBlock.module.scss';
import {useSelector} from 'react-redux';
import {getItems, getItemsLoadingStatus} from '../../store/itemsSlice';
import ItemPreviewCard from '../../components/ItemPreviewCard/ItemPreviewCard';

const NewArrivalsBlock = () => {
  const items = useSelector(getItems());
  const isItemsLoading = useSelector(getItemsLoadingStatus());
  const [firstItem] = useState(0);
  let newArrivalItems = [];
  if (!isItemsLoading) {
    newArrivalItems = items.filter((item) => item.status === 'new');
  }
  return (
    <>
      <div className={styles.newArrivalsBlock} data-testid="NewArrivalsBlock">
        <div className={styles.newArrivalsBlock__title}>
          <span>
            new arrivals
          </span>
          <div className={styles.newArrivalsBlock__arrows}>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
                {/* eslint-disable-next-line max-len */}
                <path d="M10.3879 20.35L11.8649 19.0161L7.07842 13.9528H22.45V12.0473H7.07842L11.8649 6.98391L10.3879 5.65002L3.55005 13L10.3879 20.35Z" fill="#1A1924"/>
              </svg>
            </div>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
                {/* eslint-disable-next-line max-len */}
                <path d="M15.6121 20.35L14.1352 19.0161L18.9216 13.9528H3.55005V12.0473H18.9216L14.1352 6.98391L15.6121 5.65002L22.45 13L15.6121 20.35Z" fill="#1A1924"/>
              </svg>

            </div>


          </div>
        </div>
        {!isItemsLoading &&
            <div className={styles.newArrivalsBlock__box}>
              <ItemPreviewCard item={newArrivalItems[firstItem]} />
              <ItemPreviewCard item={newArrivalItems[firstItem+1]} />
              <ItemPreviewCard item={newArrivalItems[firstItem+2]} />
            </div>
        }
      </div>
    </>
  );
};

export default NewArrivalsBlock;
