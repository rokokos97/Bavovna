import React from 'react';
import styles from './CategoriesBlock.module.scss';
// import {useSelector} from 'react-redux';
// import {getCategories, getCategoriesLoadingStatus} from '../../store/categorySlice';

const CategoriesBlock = () => {
//  const categories = useSelector(getCategories());
//  const isCategoriesLoading = useSelector(getCategoriesLoadingStatus());
  return (
    <div className={styles.categoriesBlock} data-testid="CategoriesBlock">
      <div>
        <span>
          categories
        </span>
        <div>
          {/* {!isCategoriesLoading && categories.map((category) => (*/}
          {/*  <div key={category._id}>*/}
          {/*    <img src="" alt=""/>*/}
          {/*    <span>{category.name}</span>*/}
          {/*  </div>*/}
          {/* ))}*/}
        </div>
      </div>
    </div>
  );
};

export default CategoriesBlock;
