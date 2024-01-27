import React, {useContext, useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import FilterSelectionBlock from '../filterSelectionBlock/filterSelectionBlock';
import ItemPreviewCard from '../../../components/ItemPreviewCard/ItemPreviewCard';
import ArrowBackIcon from '../../../components/svg/arrowBackIcon/arrowBackIcon';
import ArrowForwardIcon from '../../../components/svg/arrowForwardIcon/arrowForwardIcon';
import {useDataShopPage} from '../../../Providers/ShopPageMasterProvider';
import {getItemsLoadingStatus} from '../../../store/itemsSlice';
import {SearchContext} from '../../../app/App';
import styles from './cardsCatalogBlock.module.scss';

const CardsCatalogBlock = () => {
  const {filteredItems, isFilter} = useDataShopPage();
  const [items, setItems] = useState(filteredItems);
  const {searchValue} = useContext(SearchContext);
  const isItemsLoading = useSelector(getItemsLoadingStatus());
  const itemsPerPage = 9;
  let totalPages = null;
  let totalItems = null;
  let startIndex = null;
  let endIndex = null;
  let visibleItems = [];
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    if (items && searchValue) {
      setItems(items.filter((item) => item.description.toLowerCase().includes(searchValue.toLowerCase())));
    } else {
      setItems(filteredItems);
    }
  }, [searchValue, filteredItems]);

  if (items && !isItemsLoading) {
    totalItems = items.length;
    totalPages = Math.ceil(totalItems / itemsPerPage);
    startIndex = (currentPage - 1) * itemsPerPage;
    endIndex = Math.min(startIndex + itemsPerPage, totalItems);
    visibleItems = items.slice(startIndex, endIndex);
  }

  useEffect(() => {
    if (items?.length < itemsPerPage) {
      setCurrentPage(1);
    }
  });

  const handlerPageChange = (event) => {
    setCurrentPage(parseInt(event.target.textContent));
  };

  const pageButtons = document.querySelectorAll('.pageButton');
  pageButtons.forEach((button) => {
    button.addEventListener('click', handlerPageChange);
  });

  return (
    <div className={styles.catalog} data-testid='CardsCatalogBlock'>
      {isFilter ? <FilterSelectionBlock /> : null}
      <div className={styles.cardsContainer}>
        <ul
          className={
            !isFilter ? styles.cards : `${styles.cards} ${styles.cardsPadding}`
          }
        >
          {visibleItems.length ? visibleItems.map((item) => (
            <li key={item._id}>
              <ItemPreviewCard id={item._id} />
            </li>
          )) :
          <div className={styles.noFound}>
            <h2 className={styles.noFoundTitle}>No Results Found</h2>
            <p className={styles.noFoundText}>Unfortunately, nothing could be found for your search.
           Please try altering your search criteria or using less specific filters. We are always here to help you find what you need.</p>
          </div>
          }
        </ul>
        {endIndex ? (
          <div className={styles.pagination}>
            <div
              className={
                currentPage !== 1 ?
                  styles.arrow :
                  `${styles.arrow} ${styles.arrowDisable}`
              }
              onClick={
                currentPage === 1 ? null : () => setCurrentPage(currentPage - 1)
              }
            >
              <ArrowBackIcon />
              <span>Previous</span>
            </div>
            <div className={styles.btnBlock}>
              {Array.from({length: totalPages}).map((_, index) => (
                <button
                  key={index}
                  className={
                    index + 1 === currentPage ?
                      `${styles.pageButton} ${styles.activeBtn}` :
                      styles.pageButton
                  }
                  onClick={handlerPageChange}
                >
                  {index + 1}
                </button>
              ))}
            </div>
            <div
              className={
                currentPage !== totalPages ?
                  styles.arrow :
                  `${styles.arrow} ${styles.arrowDisable}`
              }
              // disabled={currentPage === 1 || currentPage === totalPages}
              onClick={
                currentPage === totalPages ?
                  null :
                  () => setCurrentPage(currentPage + 1)
              }
            >
              <span>Next</span>
              <ArrowForwardIcon />
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default CardsCatalogBlock;
