import React from 'react';
import styles from './CategoriesBlock.module.scss';
import {useSelector} from 'react-redux';
import {getCategories, getCategoriesLoadingStatus} from '../../../store/categorySlice';
import CategoryPreviewCard from '../../../components/CategoryPreviewCard/CategoryPreviewCard';
const CategoriesBlock = () => {
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
    <article className={styles.categoriesBlock} data-testid="CategoriesBlock">
      <h2 className={styles.categoriesBlock__title2}>
          categories
      </h2>
      <nav className={styles.categoriesBlock__box}>
        {!isCategoriesLoading && categories &&
              <>
                <CategoryPreviewCard item={categorySale}/>
                <CategoryPreviewCard item={categoryNew}/>
                <CategoryPreviewCard item={categories[3]}/>
                <CategoryPreviewCard item={categories[1]}/>
                <CategoryPreviewCard item={categories[0]}/>
                <CategoryPreviewCard item={categories[2]}/>
              </>}
      </nav>
    </article>
  );
};

export default CategoriesBlock;
