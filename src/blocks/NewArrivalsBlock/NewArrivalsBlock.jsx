import React, {useRef} from 'react';
import styles from './NewArrivalsBlock.module.scss';
import {useSelector} from 'react-redux';
import {getItems, getItemsLoadingStatus} from '../../store/itemsSlice';
import ItemPreviewCard from '../../components/ItemPreviewCard/ItemPreviewCard';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import {Navigation} from 'swiper/modules';


const NewArrivalsBlock = () => {
  // Створюємо ref для зберігання swiper
  const swiperRef = useRef();
  const items = useSelector(getItems());
  const isItemsLoading = useSelector(getItemsLoadingStatus());
  let newArrivalItems = [];
  // Фільтруємо елементи для нових приходів
  if (!isItemsLoading) {
    newArrivalItems = items.filter((item) => item.status === 'new');
  }
  return (
    <>
      <div className={styles.newArrivalsBlock} data-testid="NewArrivalsBlock">
        <div className={styles.newArrivalsBlock__title}>
          <span>
            new arrivals
          </span>
          <div className={styles.newArrivalsBlock__arrows}>
            {/* Кнопка для переходу до попереднього слайда */}
            <button onClick={() => swiperRef.current?.slidePrev()}>
              <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
                {/* eslint-disable-next-line max-len */}
                <path d="M10.3879 20.35L11.8649 19.0161L7.07842 13.9528H22.45V12.0473H7.07842L11.8649 6.98391L10.3879 5.65002L3.55005 13L10.3879 20.35Z" fill="#1A1924"/>
              </svg>
            </button>
            {/* Кнопка переходу до наступного слайда */}
            <button onClick={() => swiperRef.current?.slideNext()}>
              <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
                {/* eslint-disable-next-line max-len */}
                <path d="M15.6121 20.35L14.1352 19.0161L18.9216 13.9528H3.55005V12.0473H18.9216L14.1352 6.98391L15.6121 5.65002L22.45 13L15.6121 20.35Z" fill="#1A1924"/>
              </svg>

            </button>


          </div>
        </div>
        {!isItemsLoading &&
            <div className={styles.newArrivalsBlock__box}>
              {/* Swiper для відображення елементів */}
              <Swiper
                onSwiper={(swiper) => swiperRef.current = swiper}
                slidesPerView={3}
                spaceBetween={3}
                //                loop={true}
                modules={[Navigation]}
                navigation={{
                  // Відключаємо вбудовану навігацію swiper
                  nextEl: '.swiper-button-next',
                  prevEl: '.swiper-button-prev',
                }}
              >
                {newArrivalItems.map((item) =>
                  <SwiperSlide key={item._id}>
                    <ItemPreviewCard item={item}/>
                  </SwiperSlide>,
                )}
              </Swiper>
            </div>
        }
      </div>
    </>
  );
};

export default NewArrivalsBlock;
