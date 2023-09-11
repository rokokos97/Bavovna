import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import PropTypes from 'prop-types';
import {getItems, getItemsLoadingStatus} from '../../store/itemsSlice';
import FilterSelectionBlock from '../FilterSelectionBlock/FilterSelectionBlock';
import ItemPreviewCard from '../../components/ItemPreviewCard/ItemPreviewCard';
import ArrowBackIcon from '../../components/svg/arrowBackIcon/arrowBackIcon';
import ArrowForwardIcon from '../../components/svg/arrowForwardIcon/arrowForwardIcon';
import styles from './CardsCatalogBlock.module.scss';

const CardsCatalogBlock = ({isFilter, setIsFilter}) => {
  const itemsPerPage = 6;
  let totalPages = null;
  let totalItems = null;
  let startIndex = null;
  let endIndex = null;
  let visibleItems = [];
  const items = useSelector(getItems());
  const isItemsLoading = useSelector(getItemsLoadingStatus());
  const [currentPage, setCurrentPage] = useState(1);

  let newArrivalItems = [];

  if (!isItemsLoading) {
    newArrivalItems = items;
    totalItems = newArrivalItems.length;
    totalPages = Math.ceil(totalItems / itemsPerPage);
    startIndex = (currentPage - 1) * itemsPerPage;
    endIndex = Math.min(startIndex + itemsPerPage, totalItems);
    visibleItems = newArrivalItems.slice(startIndex, endIndex);
  }

  const handlePageChange = (event) => {
    setCurrentPage(parseInt(event.target.textContent));
  };

  const pageButtons = document.querySelectorAll('.pageButton');
  pageButtons.forEach((button) => {
    button.addEventListener('click', handlePageChange);
  });

  return (
    <>
      <div className={styles.catalog}>
        {isFilter ? <FilterSelectionBlock setIsFilter={setIsFilter} /> : null}
        <ul className={styles.cards}>
          {visibleItems.map((item, index) => (
            <li key={index}>
              <ItemPreviewCard item={item} />
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.pagination}>
        <div
          className={styles.arrow}
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          {currentPage !== 1 ? <ArrowBackIcon /> : null}
        </div>
        {Array.from({length: totalPages}).map((_, index) => (
          <button
            key={index}
            className={`pageButton ${
              index + 1 === currentPage ? 'active' : ''
            }`}
          >
            {index + 1}
          </button>
        ))}
        <div
          className={styles.arrow}
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          {currentPage !== totalPages ? <ArrowForwardIcon /> : null}
        </div>
      </div>
    </>
  );
};

CardsCatalogBlock.propTypes = {
  isFilter: PropTypes.bool,
  setIsFilter: PropTypes.func,
};

export default CardsCatalogBlock;
