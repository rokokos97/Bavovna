import React, {useRef} from 'react';
import styles from './checkOutShoppingCartBlockItemsList.module.scss';
import {useSelector} from 'react-redux';
import ProductCardInCart from '../../../../components/productCardInCart/productCardInCart';
import {getNormalizedCart} from '../../../../store/cartSlice';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import {Navigation} from 'swiper/modules';
import ArrowUpIcon from '../../../../components/svg/arrowUpIcon/arrowUpIcon';
const CheckOutShoppingCartBlockItemsList = () => {
  const swiperRef = useRef();
  const normalizeCart = useSelector(getNormalizedCart);
  return (
    <div className={styles.checkOutShoppingCartBlockItemsList} data-testid="CheckOutShoppingCartBlockItemsList">
      {normalizeCart.length>3 && <div className={styles.buttonsBlock}>
        <button
          className={styles.button}
          onClick={() => swiperRef.current?.slidePrev()}>
          <ArrowUpIcon/>
        </button>
        <button
          className={`${styles.button} ${styles.buttonDown}`}
          onClick={() => swiperRef.current?.slideNext()}>
          <ArrowUpIcon/>
        </button>
      </div>}
      <Swiper
        direction={'vertical'}
        onSwiper={(swiper) => swiperRef.current = swiper}
        slidesPerView={3}
        spaceBetween={2.4}
        modules={[Navigation]}
        navigation={{
          // Відключаємо вбудовану навігацію swiper
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
      >
        <div className={styles.wrapper}>
          {normalizeCart && normalizeCart.map((item, index)=> (
            <SwiperSlide key={index}>
              <ProductCardInCart item={item} type='1'/>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  );
};

export default CheckOutShoppingCartBlockItemsList;
