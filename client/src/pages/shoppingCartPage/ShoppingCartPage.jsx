import React, { useEffect, useRef } from 'react';
import styles from './ShoppingCartPage.module.scss';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCart, getNormalizedCart } from '../../store/cartSlice';
import ProductCardInCart from '../../components/ProductCardInCart/ProductCardInCart';
import { getItemsList, getItemsLoadingStatus } from '../../store/itemsSlice';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import ItemPreviewCard from '../../components/ItemPreviewCard/ItemPreviewCard';
import LeftArrowIcon from '../../components/svg/arrowIcons/LeftArrowIcon/LeftArrowIcon';
import CheckOutBlock from './Blocks/CheckOutBlock/CheckOutBlock';
import { setOrderToInitialState } from '../../store/ordersSlice';

const ShoppingCartPage = () => {
  const cart = useSelector(getCart);
  const navigate = useNavigate();
  const swiperRef = useRef();
  const isItemsLoading = useSelector(getItemsLoadingStatus);
  const items = useSelector(getItemsList);
  const normalizedCart = useSelector(getNormalizedCart);
  const dispatch = useDispatch();
  let sliderItems = [];
  if (!isItemsLoading && items) {
    sliderItems = items.filter((item) => item.status === 'new');
  }
  useEffect(() => {
    dispatch(setOrderToInitialState());
  }, []);
  return (
    <div className={styles.shoppingCartPage} data-testid="ShoppingCartPage">
      <nav className={styles.shoppingCartPage__navigation}>
        <NavLink to={'/shop'}>Home /</NavLink>
        <NavLink to={'/'}>Shopping bag</NavLink>
      </nav>
      <div className={styles.shoppingCartPage__titleBlock}>
        <div className={styles.shoppingCartPage__infoBlock}>
          <p className={styles.shoppingCartPage__title}>{`shopping bag (${cart.length} items)`}</p>
        </div>
        {cart.length === 0 && (
          <button
            className={styles.shoppingCartPage__button}
            onClick={() => {
              navigate('/shop');
            }}
          >
            <LeftArrowIcon />
            <span>Continue Shopping</span>
          </button>
        )}
      </div>
      {cart.length !== 0 ? (
        <div className={styles.shoppingCartPage__fillCartBlock}>
          <div className={styles.shoppingCartPage__itemsBlock}>
            {normalizedCart.map((item) => (
              <ProductCardInCart key={item._id + item.itemIdentifier} item={item} />
            ))}
          </div>
          <CheckOutBlock />
        </div>
      ) : (
        <div className={styles.shoppingCartPage__emptyCartBlock}>
          <p className={styles.shoppingCartPage__text}>Your shopping bag is empty</p>
          {!isItemsLoading && sliderItems && (
            <div className={styles.shoppingCartPage__slider}>
              <Swiper
                onSwiper={(swiper) => (swiperRef.current = swiper ? swiper : null)}
                slidesPerView={3}
                spaceBetween={3}
                modules={[Autoplay]}
                loop={true}
                autoplay={{ delay: 3000, pauseOnMouseEnter: true, stopOnLastSlide: true }}
              >
                {sliderItems
                  ? sliderItems.map((item) => (
                      <SwiperSlide key={item._id}>
                        <ItemPreviewCard id={item._id} />
                      </SwiperSlide>
                    ))
                  : null}
              </Swiper>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ShoppingCartPage;
