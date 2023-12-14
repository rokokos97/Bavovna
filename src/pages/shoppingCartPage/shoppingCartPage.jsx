import React, {useEffect, useRef, useState} from 'react';
import styles from './shoppingCartPage.module.scss';
import LeftArrowIcon from '../../components/svg/leftArrowIcon/leftArrowIcon';
import {useNavigate} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {getCart} from '../../store/cartSlice';
import ProductCardInCart from '../../components/productCardInCart/productCardInCart';
import {getItems, getItemsLoadingStatus} from '../../store/itemsSlice';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Autoplay} from 'swiper/modules';
import ItemPreviewCard from '../../components/ItemPreviewCard/ItemPreviewCard';
import _ from 'lodash';
import CheckOutBlock from './Blocks/checkOutBlock/checkOutBlock';

const ShoppingCartPage = () => {
  const cart = useSelector(getCart());
  const navigate = useNavigate();
  const swiperRef = useRef();
  const isItemsLoading = useSelector(getItemsLoadingStatus());
  const items = useSelector(getItems());
  const [normalizedCart, setNormalizedCart] = useState([]);
  let sliderItems = [];
  if (!isItemsLoading && items) {
    sliderItems = items.filter((item) => item.status === 'new');
  }
  useEffect(()=>{
    const newNormalizedCart = [];
    for (const good of cart) {
      const foundIndex = newNormalizedCart.findIndex((item) => item.itemIdentifier === good.itemIdentifier);
      if (foundIndex !== -1) {
        newNormalizedCart[foundIndex] = {
          ...newNormalizedCart[foundIndex],
          itemQuantity: (newNormalizedCart[foundIndex].itemQuantity + 1),
        };
      } else {
        newNormalizedCart.push(good);
      }
    }
    const sortedCart = _.sortBy(newNormalizedCart, 'itemName');
    setNormalizedCart(sortedCart);
  }, [cart]);
  return (
    <div className={styles.shoppingCartPage} data-testid="ShoppingCartPage">
      <div className={styles.titleBlock}>
        <div className={styles.infoBlock}>
          <p className={styles.title}>{`shopping bag (${cart.length} items)`}</p>
        </div>
        {(cart.length === 0) && <button
          className={styles.button}
          onClick={() => {
            navigate('/catalogue');
          }}
        >
          <LeftArrowIcon/>
          <span>
            Continue Shopping
          </span>
        </button>}
      </div>
      {cart.length !== 0 ?
        <div className={styles.fillCartBlock}>
          <div className={styles.itemsBlock}>
            {
              normalizedCart.map((item) => <ProductCardInCart key={item._id+item.itemIdentifier} item={item}/>)
            }
          </div>
          <CheckOutBlock />
        </div> :
        <div className={styles.emptyCartBlock}>
          <p className={styles.text}>Your shopping bag is empty</p>
          {!isItemsLoading && sliderItems &&
            <div>
              {/* Swiper для відображення елементів */}
              <Swiper
                onSwiper={(swiper) => swiperRef.current = swiper? swiper : null}
                slidesPerView={3}
                spaceBetween={3}
                modules={[Autoplay]}
                loop={true}
                autoplay={{delay: 3000, pauseOnMouseEnter: true, stopOnLastSlide: true}}
              >
                {sliderItems?sliderItems.map((item) =>
                  <SwiperSlide key={item._id}>
                    <ItemPreviewCard id={item._id}/>
                  </SwiperSlide>,
                ): null}
              </Swiper>
            </div>
          }
        </div>
      }
    </div>
  );
};

export default ShoppingCartPage;
