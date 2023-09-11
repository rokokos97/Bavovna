import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import PropTypes from 'prop-types';

import {SizesList} from '../../components/sizeList/SizesList';
import {Modal} from '../../components/modal';
import {Dropdown} from '../../components/dropdown/Dropdown';
import {SizeGuide} from '../../components/modal/modalContent';
import {getItems, getItemsLoadingStatus} from '../../store/itemsSlice';

import styles from './Card.module.scss';
import NotFoundPage from '../notFoundPage/notFoundPage';

// import '../../services/dropdown.service';

const Card = ({searchingId = '1'}) => {
  const [openModal, setOpenModal] = useState(true);
  const items = useSelector(getItems());
  const isItemsLoading = useSelector(getItemsLoadingStatus());

  const changeImage = (imgUrl) => {
    const mainImage = document.getElementById('mainImage');
    mainImage.src = imgUrl;
  };

  if (!isItemsLoading) {
    console.log(items);
    const {name, price, size, images, description, modelParams, composition} =
      items[searchingId];

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
                  <img src={`http://localhost:8000/api/${image}`} alt='img' />
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.mainImg}>
            <img
              id='mainImage'
              src={`http://localhost:8000/api/${images[0]}`}
              alt='img'
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
                  onClick={() => setOpenModal(true)}
                >
                  Size guide
                </button>
              </div>
              <div className={styles.formBag}>
                <button>ADD TO BAG</button>
              </div>
            </form>
            <div className={styles.descriptions}>
              <Dropdown
                id='dropdownToggle'
                label='Details'
                name='details'
                inner={description}
              />
              <Dropdown
                id='dropdownToggle'
                label='Model parameters'
                name='parameters'
                inner={modelParams}
              />
              <Dropdown
                id='dropdownToggle'
                label='Composition and care'
                name='composition'
                inner={composition.join()}
              />
              <Dropdown
                id='dropdownToggle'
                label='Shipping and returns'
                name='shipping'
                inner='Lorem ipsum dolor sit amen consectetur'
              />
            </div>
          </div>
          <Modal isOpen={openModal} onClose={setOpenModal}>
            <SizeGuide onClose={setOpenModal} />
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

export default Card;
