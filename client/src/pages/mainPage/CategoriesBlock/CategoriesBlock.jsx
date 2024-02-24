import React, {useRef} from 'react';
import styles from './CategoriesBlock.module.scss';
import {useSelector} from 'react-redux';
import {getCategories, getCategoriesLoadingStatus} from '../../../store/categorySlice';
import CategoryPreviewCard from '../../../components/CategoryPreviewCard/CategoryPreviewCard';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation} from 'swiper/modules';
import LeftArrowIcon from '../../../components/svg/arrowIcons/LeftArrowIcon/LeftArrowIcon';

const CategoriesBlock = () => {
  const swiperRef = useRef();
  const isCategoriesLoading = useSelector(getCategoriesLoadingStatus());
  const categories = useSelector(getCategories());
  const categoryNew = {
    name: 'new',
    status: 'new',
    image: 'uploads/categoryNew.jpeg',
  };
  const categorySale = {
    name: 'sale',
    status: 'sale',
    image: 'uploads/categorySale.jpeg',
  };
  return (
    <div className={styles.categoriesBlock} data-testid="CategoriesBlock">
      <div className={styles.title}>
        <span>
          categories
        </span>
        {categories && categories.length>6 ? <div className={styles.arrows}>
          {/* Кнопка для переходу до попереднього слайда */}
          <button onClick={() => swiperRef.current?.slidePrev()}>
            <LeftArrowIcon />
          </button>
          {/* Кнопка переходу до наступного слайда */}
          <button onClick={() => swiperRef.current?.slideNext()}>
            <LeftArrowIcon />
          </button>
        </div> : <></>}
      </div>
      {
        <div className={styles.newArrivalsBlock__box}>
          {/* Swiper для відображення елементів */}
          <Swiper
            onSwiper={(swiper) => swiperRef.current = swiper}
            slidesPerView={6}
            spaceBetween={24}
            //                loop={true}
            modules={[Navigation]}
            navigation={{
              // Відключаємо вбудовану навігацію swiper
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
          >
            {!isCategoriesLoading && categories &&
              <>
                <SwiperSlide>
                  <CategoryPreviewCard item={categorySale}/>
                </SwiperSlide>
                <SwiperSlide>
                  <CategoryPreviewCard item={categoryNew}/>
                </SwiperSlide>
                <SwiperSlide>
                  <CategoryPreviewCard item={categories[3]}/>
                </SwiperSlide>
                <SwiperSlide>
                  <CategoryPreviewCard item={categories[1]}/>
                </SwiperSlide>
                <SwiperSlide>
                  <CategoryPreviewCard item={categories[0]}/>
                </SwiperSlide>
                <SwiperSlide>
                  <CategoryPreviewCard item={categories[2]}/>
                </SwiperSlide>
              </>
            }
          </Swiper>
        </div>
      }
    </div>
  );
};

export default CategoriesBlock;
