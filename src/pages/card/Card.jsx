import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {NotFoundPage} from '../notFoundPage/NotFoundPage';
import {SizesList} from '../../components/sizeList/SizesList';
import {Modal} from '../../components/modal';
import {SizeGuide} from '../../components/modal/modalContent/SizeGuide';

// import {searchItem} from '../../logic/searchItem';

// import things from '../../things.json';
import {useSelector} from 'react-redux';
import {getItems, getItemsLoadingStatus} from '../../store/itemsSlice';

import styles from './Card.module.scss';

const Card = ({searchingId = '1'}) => {
  const [modalOpen, setModalOpen] = useState(false);
  const items = useSelector(getItems());
  const isItemsLoading = useSelector(getItemsLoadingStatus());

  const changeImage = (imgUrl) => {
    const mainImage = document.getElementById('mainImage');
    mainImage.src = imgUrl;
  };

  if (!isItemsLoading) {
    console.log(items);
    const {name, price, size, images} = items[searchingId];

    return (
      <>
        <section className={styles.card}>
          <div className={styles.imgs}>
            <ul className={styles.imgsList}>
              {images.map((image) => (
                <li
                  key={image}
                  onClick={() =>
                    changeImage(`http://localhost:8000/api/${image}`)
                  }
                >
                  <img src={`http://localhost:8000/api/${image}`} alt="img" />
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.mainImg}>
            <img
              id="mainImage"
              src={`http://localhost:8000/api/${images[0]}`}
              alt="img"
            />
          </div>
          <div className={styles.about}>
            <form className={styles.buyForm}>
              <h2 className={styles.buyFormTitle}>{name}</h2>
              <span className={styles.buyFormPrice}>${price}</span>
              <div className={styles.size}>
                <SizesList sizes={size} />
                <button
                  className={styles.btnGuide}
                  onClick={() => setModalOpen(true)}
                >
                  Size guide
                </button>
              </div>
              <div className={styles.formBag}>
                <button>ADD TO BAG</button>
              </div>
            </form>
          </div>
          <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
            <SizeGuide />
          </Modal>
        </section>
      </>
    );
  } else {
    return <NotFoundPage />;
  }
};
Card.propTypes = {
  searchingId: PropTypes.string.isRequired,
};

export {Card};
