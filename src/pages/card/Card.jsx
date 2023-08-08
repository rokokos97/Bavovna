import React from 'react';
import PropTypes from 'prop-types';
import {NotFoundPage} from '../notFoundPage/NotFoundPage';
import {SizesList} from '../../components/sizeList/SizesList';

// import {searchItem} from '../../logic/searchItem';

// import things from '../../things.json';
import {useSelector} from 'react-redux';
import {getItems, getItemsLoadingStatus} from '../../store/itemsSlice';

import styles from './Card.module.scss';

const Card = ({searchingId = 1}) => {
  const items = useSelector(getItems());
  const isItemsLoading = useSelector(getItemsLoadingStatus());
  //  const thing = searchItem(things, searchingId);
  if (!isItemsLoading) {
    console.log(items);
    const {name, price, size} = items[searchingId];
    return (
      <section className={styles.card}>
        <div className={styles.imgs}>
          <ul className={styles.imgsList}>
            <li className={styles.imgsListItem}>
              <img src="/img/models/model_1/img_1.jpg" alt="img_1" />
            </li>
            <li className={styles.imgsListItem}>
              <img src="/img/models/model_1/img_2.jpg" alt="img_2" />
            </li>
            <li className={styles.imgsListItem}>
              <img src="/img/models/model_1/img_3.jpg" alt="img_3" />
            </li>
          </ul>
        </div>
        <div className={styles.mainImg}>
          <img src="/img/models/model_1/img_1_main.jpg" alt="" />
        </div>
        <div className={styles.about}>
          <form className={styles.buyForm}>
            <h2 className={styles.buyFormTitle}>{name}</h2>
            <span className={styles.buyFormPrice}>${price}</span>
            <div className={styles.size}>
              <span>Size</span>
              <SizesList sizes={size} />
            </div>
            <div className={styles.formBag}>
              <button>ADD TO BAG</button>
            </div>
          </form>
        </div>
      </section>
    );
  } else {
    return <NotFoundPage />;
  }
};
Card.propTypes = {
  searchingId: PropTypes.number.isRequired,
};

export {Card};
