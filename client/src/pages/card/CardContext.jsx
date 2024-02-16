/* eslint-disable operator-linebreak */
import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import PropTypes from 'prop-types';
import useChangeFavorite from '../../services/useChangeFavorite';
import {showBodyOverflow, hideBodyOverflow} from '../../services/modal.service';
import config from '../../config.json';
import {addItemToCart} from '../../store/cartSlice';
import {getUser} from '../../store/userSlice';
import {useDataCard} from '../../providers/CardMasterProvider';
import {SizesList} from '../../components/sizeList/SizesList';
import AlsoBoughtBlock from '../../blocks/alsoBoughtBlock/AlsoBoughtBlock';
import {Modal} from '../../components/modal';
import Dropdown from '../../components/dropdown/Dropdown';
import CheckoutModal from '../../components/modal/modalContent/checkoutModal/CheckoutModal';
import SizeGuide from '../../components/modal/modalContent/sizeGuide/SizeGuide';
import ColorsList from '../../components/colorsList/ColorsList';
import styles from './Card.module.scss';
import FillHeartIcon from '../../components/svg/favoriteIcons/fillHeartIcon/fillHeartIcon';
import EmptyHeartIcon from '../../components/svg/favoriteIcons/emptyHeartIcon/emptyHeartIcon';

const CardContext = ({item}) => {
  const dispatch = useDispatch();
  const user = useSelector(getUser);
  const {itemData, setItemData, collectData} = useDataCard();
  const {
    _id,
    name,
    price,
    color,
    size,
    images,
    description,
    modelParams,
    composition,
    sale,
  } = item;
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [isFavorite, handleIsFavorite] = useChangeFavorite(user, _id);
  const [showGuideModal, setShowGuideModal] = useState(false);
  const [showCheckoutModal, setShowCheckoutModal] = useState(false);
  let currentPrice = 0;

  sale
    ? (currentPrice = parseFloat(price * sale) / 100)
    : (currentPrice = price);

  useEffect(() => {
    setItemData({
      ...itemData,
      _id,
      itemName: name,
      itemPrice: price,
      discountPrice: +currentPrice,
      itemImg: `${config.apiEndpoint}${images[0]}`,
    });
  }, [item]);

  const handleCollectData = () => {
    if (selectedColor && selectedSize) {
      //      Додаю костиль бо тут треба переробити трохи
      const newItemData = {
        ...itemData,
        itemIdentifier: `${itemData._id}-${itemData.itemSize}-${itemData.itemSize}`,
      };
      dispatch(addItemToCart(newItemData));
      collectData(itemData);
      setShowCheckoutModal(true);
      hideBodyOverflow();
    }
  };

  const changeImage = (imgUrl) => {
    const mainImage = document.getElementById('mainImage');
    mainImage.src = imgUrl;
  };

  const openShowGuideModal = () => {
    setShowGuideModal(true);
    hideBodyOverflow();
  };

  const closeModal = () => {
    setShowGuideModal(false);
    setShowCheckoutModal(false);
    showBodyOverflow();
  };
  return (
    <>
      <section className={styles.cardSection}>
        <p className={styles.navigation}>{`Home / Shop / ${name}`}</p>
        <div className={styles.card}>
          <div className={styles.imgs}>
            <ul className={styles.imgsList}>
              {images.map((image, index) => (
                <li
                  key={index}
                  onClick={() => changeImage(`${config.apiEndpoint}${image}`)}
                >
                  <img src={`${config.apiEndpoint}${image}`} alt='model' />
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.mainImg}>
            <img
              id='mainImage'
              src={`${config.apiEndpoint}${images[0]}`}
              alt='model'
            />
          </div>
          <div className={styles.about}>
            <div className={styles.aboutInner}>
              <form className={styles.buyForm}>
                <div className={styles.titleBlock}>
                  <h2 className={styles.buyFormTitle}>{name}</h2>
                  <div className={styles.heart} onClick={handleIsFavorite}>
                    {isFavorite ? <FillHeartIcon /> : <EmptyHeartIcon />}
                  </div>
                </div>
                <div className={styles.priceBlock}>
                  {sale ? (
                    <span className={styles.unCurrentPrice}>
                      ${price.toFixed(2)}
                    </span>
                  ) : null}
                  <span className={styles.buyFormPrice}>
                    ${currentPrice.toFixed(2)}
                  </span>
                </div>
                <dir className={styles.color}>
                  <ColorsList
                    itemColors={color}
                    selectedColor={selectedColor}
                    setSelectedColor={setSelectedColor}
                  />
                </dir>
                <div className={styles.size}>
                  <SizesList
                    sizes={size}
                    selectedSize={selectedSize}
                    setSelectedSize={setSelectedSize}
                  />
                  <button
                    type='button'
                    className={styles.btnGuide}
                    onClick={openShowGuideModal}
                  >
                    Size guide
                  </button>
                </div>
                <div className={styles.formBag}>
                  <button
                    type='button'
                    onClick={handleCollectData}
                    className={styles.activeBtn}
                    disabled={!selectedColor || !selectedSize}
                  >
                    <span>ADD TO BAG</span>
                  </button>
                </div>
              </form>
              <div className={styles.descriptions}>
                <Dropdown
                  id='rightArrowDropdown'
                  placeholder='Details'
                  name='details'
                  inner={description}
                />
                <Dropdown
                  id='rightArrowDropdown'
                  placeholder='Model parameters'
                  name='parameters'
                  inner={modelParams}
                />
                <Dropdown
                  id='rightArrowDropdown'
                  placeholder='Composition and care'
                  name='composition'
                  inner={composition.join()}
                />
                <Dropdown
                  id='rightArrowDropdown'
                  placeholder='Shipping and returns'
                  name='shipping'
                  inner='Lorem ipsum dolor sit amen consectetur'
                />
              </div>
            </div>
          </div>
        </div>
        <AlsoBoughtBlock />
        <Modal isOpen={showCheckoutModal} handleCloseModal={closeModal}>
          <CheckoutModal handleCloseModal={closeModal} />
        </Modal>
        <Modal isOpen={showGuideModal} handleCloseModal={closeModal}>
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
