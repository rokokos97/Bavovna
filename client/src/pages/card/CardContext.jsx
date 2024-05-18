import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import useChangeFavorite from '../../utils/useChangeFavorite';
import {showBodyOverflow, hideBodyOverflow} from '../../utils/modal.service';
import config from '../../config.json';
import {addItemToCart} from '../../store/cartSlice';
import {getUser} from '../../store/userSlice';
import {useDataCard} from '../../providers/CardMasterProvider';
import {SizesList} from '../../components/SizeList/SizesList';
import {Modal} from '../../components/modal';
import Dropdown from '../../components/Dropdown/Dropdown';
import CheckoutModal from '../../components/modal/modalContent/CheckoutModal/CheckoutModal';
import SizeGuide from '../../components/modal/modalContent/SizeGuide/SizeGuide';
import ColorsList from '../../components/ColorsList/ColorsList';
import styles from './Card.module.scss';
import FillHeartIcon from '../../components/svg/favoriteIcons/FillHeartIcon/FillHeartIcon';
import EmptyHeartIcon from '../../components/svg/favoriteIcons/EmptyHeartIcon/EmptyHeartIcon';
import {useParams} from 'react-router-dom';
import {getItemsById, getItemsList} from '../../store/itemsSlice';
import Loader from '../../components/Loader/Loader';
import SliderBlock from '../../blocks/SliderBlock/SliderBlock';

const CardContext = () => {
  const {id} = useParams();
  const dispatch = useDispatch();
  const item = useSelector(getItemsById(id));
  const items = useSelector(getItemsList);
  let sortedItems = [];
  if (items) {
    sortedItems = items.filter((item) => item.status === 'sale');
  }
  if (!item) {
    return <Loader />;
  }
  const user = useSelector(getUser);
  const {itemData, setItemData} = useDataCard();
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

  sale ?
    (currentPrice = parseFloat(price * sale) / 100) :
    (currentPrice = price);

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
      const newItemData = {
        ...itemData,
        itemIdentifier: `${itemData._id}-${itemData.itemSize}-${itemData.itemColor}`,
      };
      dispatch(addItemToCart(newItemData));
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
          <div className={styles.imgsContainer}>
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
              <div
                className={styles.imgHeart}
                onClick={handleIsFavorite}
              >
                {isFavorite ? <FillHeartIcon /> : <EmptyHeartIcon />}
              </div>
              <img
                id='mainImage'
                src={`${config.apiEndpoint}${images[0]}`}
                alt='model'
              />
            </div>
          </div>
          <div className={styles.about}>
            <div className={styles.aboutInner}>
              <div
                className={styles.aboutInnerHeart}
                onClick={handleIsFavorite}
              >
                {isFavorite ? <FillHeartIcon /> : <EmptyHeartIcon />}
              </div>
              <form className={styles.buyForm}>
                <div className={styles.registerForm__titleBlock}>
                  <h2 className={styles.buyFormTitle}>{name}</h2>
                </div>
                <div className={styles.priceBlock}>
                  {sale ? (
                    <span className={styles.unCurrentPrice}>
                      ₴{price.toFixed(2)}
                    </span>
                  ) : null}
                  <span className={styles.buyFormPrice}>
                    ₴{currentPrice.toFixed(2)}
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
                    className={styles.btnGuide}
                    type='button'
                    aria-label='open size guide'
                    onClick={openShowGuideModal}
                  >
                    Size guide
                  </button>
                </div>
                <div className={styles.formBag}>
                  <button
                    onClick={handleCollectData}
                    type='button'
                    aria-label='add to bag'
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
        <SliderBlock title={'You might also like'} itemsList={sortedItems} />
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

export default CardContext;
