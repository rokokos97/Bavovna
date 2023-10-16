import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import FilterSelectionBlock from '../FilterSelectionBlock/FilterSelectionBlock';
import ItemPreviewCard from '../../components/ItemPreviewCard/ItemPreviewCard';
import ArrowBackIcon from '../../components/svg/arrowBackIcon/arrowBackIcon';
import ArrowForwardIcon from '../../components/svg/arrowForwardIcon/arrowForwardIcon';
import {useDataCatalogue} from '../../Providers/CatalogueMasterProvider';
import styles from './CardsCatalogBlock.module.scss';

const CardsCatalogBlock = () => {
  const {filteredItems: items, isFilter} = useDataCatalogue();

  const itemsPerPage = 9;
  let totalPages = null;
  let totalItems = null;
  let startIndex = null;
  let endIndex = null;
  let visibleItems = [];
  const [currentPage, setCurrentPage] = useState(1);

  if (items) {
    totalItems = items.length;
    totalPages = Math.ceil(totalItems / itemsPerPage);
    startIndex = (currentPage - 1) * itemsPerPage;
    endIndex = Math.min(startIndex + itemsPerPage, totalItems);
    visibleItems = items.slice(startIndex, endIndex);
  }

  const handlerPageChange = (event) => {
    setCurrentPage(parseInt(event.target.textContent));
  };

  const pageButtons = document.querySelectorAll('.pageButton');
  pageButtons.forEach((button) => {
    button.addEventListener('click', handlerPageChange);
  });

  return (
    <div className={styles.catalog} data-testid='CardsCatalogBlock'>
      {isFilter ? (
          <FilterSelectionBlock />
        ) : null}
      <div className={styles.cardsContainer}>
        <ul
          className={
              !isFilter ?
                styles.cards :
                `${styles.cards} ${styles.cardsPadding}`
          }
        >
          {visibleItems.map((item) => (
            <Link key={item._id} to={`/catalogue/${item._id}`}>
              <li>
                <ItemPreviewCard item={item} />
              </li>
            </Link>
          ))}
        </ul>
        <div className={styles.pagination}>
          <div
            className={
                currentPage !== 1 ?
                  styles.arrow :
                  `${styles.arrow} ${styles.arrowDisable}`
            }
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(currentPage - 1)}
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
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            <span>Next</span>
            <ArrowForwardIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardsCatalogBlock;
