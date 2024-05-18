import React, {useRef} from 'react';
import styles from './SliderBlock.module.scss';
import ItemPreviewCard from '../../components/ItemPreviewCard/ItemPreviewCard';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {Navigation, Pagination} from 'swiper/modules';
import BigLeftArrowIcon from '../../components/svg/arrowIcons/BigLeftArrowIcon/BigLeftArrowIcon';
import PropTypes from 'prop-types';


const SliderBlock = ({itemsList, title}) => {
  const swiperRef = useRef();
  return (
    <article className={styles.sliderBlock} data-testid='SliderBlock'>
      <section className={styles.sliderBlock__titleSection}>
        <h2 className={styles.sliderBlock__title2}>{title}</h2>
        <section className={styles.sliderBlock__arrowSection}>
          <button
            className={styles.sliderBlock__button}
            type='button'
            aria-label='go to previous slide'
            onClick={() => swiperRef.current?.slidePrev()}
          >
            <BigLeftArrowIcon />
          </button>
          <button
            className={`${styles.sliderBlock__button} ${styles.sliderBlock__buttonRight}`}
            type='button'
            aria-label='go to previous slide'
            onClick={() => swiperRef.current?.slideNext()}
          >
            <BigLeftArrowIcon />
          </button>
        </section>
      </section>
      {itemsList && (
        <Swiper
          className={styles.sliderBlock__Swiper}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          modules={[Navigation, Pagination]}
          slidesPerView={2}
          spaceBetween={8}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          pagination={{
            type: 'progressbar',
          }}
          // scrollbar={{hide: true}}
          breakpoints={{
            1400: {
              slidesPerView: 3,
              spaceBetween: 24,
            },
            1280: {
              slidesPerView: 2.7,
              spaceBetween: 24,
            },
            1000: {
              slidesPerView: 2.7,
              spaceBetween: 16,
              // pagination: {type: 'progressbar'},
            },
            950: {
              slidesPerView: 2.5,
              spaceBetween: 16,
              // pagination: {type: 'progressbar'},
            },
            850: {
              slidesPerView: 2.3,
              spaceBetween: 16,
              // pagination: {type: 'progressbar'},
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 16,
              // pagination: {type: 'progressbar'},
            },
            650: {
              slidesPerView: 3.7,
              spaceBetween: 16,
            },
            550: {
              slidesPerView: 3.3,
              spaceBetween: 16,
            },
            500: {
              slidesPerView: 2.7,
              spaceBetween: 16,
            },
            400: {
              slidesPerView: 2.4,
              spaceBetween: 16,
            },
          }}
        >
          {itemsList.map((item) => (
            <SwiperSlide key={item._id}>
              <ItemPreviewCard id={item._id} />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </article>
  );
};

SliderBlock.propTypes = {
  itemsList: PropTypes.array.isRequired,
  title: PropTypes.string,
};
export default SliderBlock;
