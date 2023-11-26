import React, {useRef} from 'react';
import styles from './NewArrivalsBlock.module.scss';
import {useSelector} from 'react-redux';
import {getItems, getItemsLoadingStatus} from '../../store/itemsSlice';
import ItemPreviewCard from '../../components/ItemPreviewCard/ItemPreviewCard';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import {Navigation} from 'swiper/modules';
import LeftArrowIcon from '../../components/svg/leftArrowIcon/leftArrowIcon';
import RightArrowIcon from '../../components/svg/rightArrowIcon/rightArrowIcon';


const NewArrivalsBlock = () => {
  // Створюємо ref для зберігання swiper
  const swiperRef = useRef();
  const isItemsLoading = useSelector(getItemsLoadingStatus());
  const items = useSelector(getItems());
  let newArrivalItems = [];
  console.log('isItemsLoading', isItemsLoading, 'items', items);
  if (!isItemsLoading && items) {
    newArrivalItems = items.filter((item) => item.status === 'new');
    console.log(newArrivalItems);
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
              <LeftArrowIcon />
            </button>
            {/* Кнопка переходу до наступного слайда */}
            <button onClick={() => swiperRef.current?.slideNext()}>
              <RightArrowIcon />
            </button>
          </div>
        </div>
        {!isItemsLoading && newArrivalItems &&
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
                    <ItemPreviewCard id={item._id}/>
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
