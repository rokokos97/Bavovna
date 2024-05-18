import React from 'react';
import styles from './NewArrivalsBlock.module.scss';
import {useSelector} from 'react-redux';
import {getItemsList, getItemsLoadingStatus} from '../../../store/itemsSlice';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import SliderBlock from '../../../blocks/SliderBlock/SliderBlock';

const NewArrivalsBlock = () => {
  const isItemsLoading = useSelector(getItemsLoadingStatus);
  const items = useSelector(getItemsList);
  let newArrivalItems = [];
  if (!isItemsLoading && items) {
    newArrivalItems = items.filter((item) => item.status === 'new');
  }
  return (
    <article className={styles.newArrivalsBlock} data-testid='SliderBlock'>
      {!isItemsLoading && items && <SliderBlock itemsList={newArrivalItems} title={'new arrivals'}/>}
    </article>
  );
};

export default NewArrivalsBlock;
