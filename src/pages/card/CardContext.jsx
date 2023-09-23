import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {SizesList} from '../../components/sizeList/SizesList';
import AlsoBoughtBlock from '../../blocks/AlsoBoughtBlock/AlsoBoughtBlock';
import {Modal} from '../../components/modal';
import {Dropdown} from '../../components/dropdown/Dropdown';
import CheckoutModal from '../../components/modal/CheckoutModal/CheckoutModal';
import SizeGuide from '../../components/modal/modalContent/SizeGuide/SizeGuide';
import {useData} from '../../Providers/CardMasterProvider';
import styles from './Card.module.scss';
import ColorsList from '../../components/colorsList/ColorsList';

const colors = [
  {
    name: 'Black',
    value: '#000000',
  },
  {
    name: 'Indigo',
    value: '#4B0082',
  },
  {
    name: 'Vanilla',
    value: '#F3E5AB',
  },
  {
    name: 'White',
    value: '#ffffff',
  },
];

const CardContext = ({item}) => {
  const [openModal, setOpenModal] = useState(false);
  const {itemData, setItemData, collectData} = useData();
  const {name, price, size, images, description, modelParams, composition} =
    item;

  const handleCollectData = () => {
    setItemData({
      ...itemData,
      itemName: name,
      itemPrice: price,
      itemImg: `http://localhost:8000/api/${images[0]}`,
    });
    collectData();
  };

  const changeImage = (imgUrl) => {
    const mainImage = document.getElementById('mainImage');
    mainImage.src = imgUrl;
  };

  const closeModal = () => {
    setOpenModal(false);
  };

  return (
    <>
      <section className={styles.cardSection}>
        <div className={styles.card}>
          <div className={styles.imgs}>
            <ul className={styles.imgsList}>
              {images.map((image) => (
                <li
                  key={image}
                  onClick={() =>
                    changeImage(`http://localhost:8000/api/${image}`)
                  }
                >
                  <img src={`http://localhost:8000/api/${image}`} alt='model' />
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.mainImg}>
            <img
              id='mainImage'
              src={`http://localhost:8000/api/${images[0]}`}
              alt='model'
            />
          </div>
          <div className={styles.about}>
            <div className={styles.aboutInner}>
              <form className={styles.buyForm}>
                <h2 className={styles.buyFormTitle}>{name}</h2>
                <span className={styles.buyFormPrice}>${price}</span>
                <dir className={styles.color}>
                  <ColorsList colors={colors} />
                </dir>
                <div className={styles.size}>
                  <SizesList sizes={size} />
                  <button
                    type='button'
                    className={styles.btnGuide}
                    onClick={() => {
                      setOpenModal(true);
                    }}
                  >
                    Size guide
                  </button>
                </div>
                <div className={styles.formBag}>
                  <button type='button' onClick={() => handleCollectData()}>
                    ADD TO BAG
                  </button>
                </div>
              </form>
              <div className={styles.descriptions}>
                <Dropdown
                  id='dropdownToggle'
                  placeholder='Details'
                  name='details'
                  inner={description}
                />
                <Dropdown
                  id='dropdownToggle'
                  placeholder='Model parameters'
                  name='parameters'
                  inner={modelParams}
                />
                <Dropdown
                  id='dropdownToggle'
                  placeholder='Composition and care'
                  name='composition'
                  inner={composition.join()}
                />
                <Dropdown
                  id='dropdownToggle'
                  placeholder='Shipping and returns'
                  name='shipping'
                  inner='Lorem ipsum dolor sit amen consectetur'
                />
              </div>
            </div>
          </div>
        </div>
        <AlsoBoughtBlock />
        <Modal isOpen={true} handleCloseModal={closeModal}>
          <CheckoutModal handleCloseModal={closeModal} />
        </Modal>
        <Modal isOpen={openModal} handleCloseModal={closeModal}>
          <SizeGuide handleCloseModal={closeModal} />
        </Modal>
      </section>
    </>
  );
};

CardContext.propTypes = {
  item: PropTypes.object.isRequired,
};

export default CardContext;
