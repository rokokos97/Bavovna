import React, { useRef } from 'react';
import styles from './CheckOutShoppingCartBlockItemsList.module.scss';
import { useSelector } from 'react-redux';
import ProductCardInCart from '../../../../components/ProductCardInCart/ProductCardInCart';
import { getNormalizedCart } from '../../../../store/cartSlice';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import ArrowUpIcon from '../../../../components/svg/arrowIcons/ArrowUpIcon/ArrowUpIcon';
const CheckOutShoppingCartBlockItemsList = () => {
  const swiperRef = useRef();
  const normalizeCart = useSelector(getNormalizedCart);
  return (
    <article
      className={styles.checkOutShoppingCartBlockItemsList}
      data-testid="CheckOutShoppingCartBlockItemsList"
    >
      {normalizeCart.length > 3 ? (
        <>
          <section className={styles.checkOutShoppingCartBlockItemsList__buttonsBlock}>
            <button
              className={styles.checkOutShoppingCartBlockItemsList__button}
              onClick={() => swiperRef.current?.slidePrev()}
            >
              <ArrowUpIcon />
            </button>
            <button
              className={`${styles.checkOutShoppingCartBlockItemsList__button} ${styles.checkOutShoppingCartBlockItemsList__buttonDown}`}
              onClick={() => swiperRef.current?.slideNext()}
            >
              <ArrowUpIcon />
            </button>
          </section>
          <Swiper
            direction={'vertical'}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            slidesPerView={3}
            spaceBetween={2.4}
            modules={[Navigation]}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
          >
            <section className={styles.checkOutShoppingCartBlockItemsList__wrapper}>
              {normalizeCart &&
                normalizeCart.map((item, index) => (
                  <SwiperSlide key={index}>
                    <ProductCardInCart item={item} type="1" />
                  </SwiperSlide>
                ))}
            </section>
          </Swiper>
        </>
      ) : (
        <ul className={styles.checkOutShoppingCartBlockItemsList__cartList}>
          {normalizeCart &&
            normalizeCart.map((item, index) => (
              <li key={index}>
                <ProductCardInCart item={item} type="1" />
              </li>
            ))}
        </ul>
      )}
    </article>
  );
};

export default CheckOutShoppingCartBlockItemsList;
