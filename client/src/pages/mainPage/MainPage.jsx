import React, {useEffect, useState} from 'react';
import styles from './MainPage.module.scss';
import NewArrivalsBlock from './newArrivalsBlock/NewArrivalsBlock';
import NewCollectionBlock from './newCollectionBlock/NewCollectionBlock';
import SaleBlock from './summerSaleBlock/SaleBlock';
import BavovnaBlock from './bavovnaTextBlock/BavovnaBlock';
import NewsLettersBlock from './newsLettersBlock/NewsLettersBlock';
import BavovnaCoverImageBlock from './bavovnaCoverImageBlock/BavovnaCoverImageBlock';
import CategoriesBlock from './categoriesBlock/CategoriesBlock';
import ModalCookies from '../../components/modal/modalContent/ModalCookies/modalCookies';
import {Modal} from '../../components/modal';
import {showBodyOverflow} from '../../services/modal.service';
import Cookies from 'js-cookie';
import {getCategoriesError} from '../../store/categorySlice';
import {useSelector} from 'react-redux';
import {getColorsError} from '../../store/colorsSlice';
import {getCitiesError} from '../../store/citiesSlice';
import {getItemsError} from '../../store/itemsSlice';
import ModalError from '../../components/modal/modalContent/modalError/modalError';
const MainPage = () => {
  const categoriesError = useSelector(getCategoriesError());
  const colorsError = useSelector(getColorsError());
  const itemsError = useSelector(getItemsError());
  const citiesErrors = useSelector(getCitiesError());
  const [error, setError] = useState(null);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [showCookiesModal, setShowCookiesModal] = useState(false);
  useEffect(() => {
    const userConsent = Cookies.get('userConsent');
    if (!userConsent) {
      setShowCookiesModal(true);
    }
  }, []);
  useEffect(() => {
    if (categoriesError || colorsError || itemsError || citiesErrors) {
      setError(categoriesError || colorsError || itemsError || citiesErrors);
      setShowErrorModal(true);
    }
  }, [categoriesError, colorsError, itemsError, citiesErrors]);
  const closeModal = () => {
    setShowCookiesModal(false);
    setShowErrorModal(false);
    showBodyOverflow();
  };
  const confirmCookies = () => {
    Cookies.set('userConsent', 'true', {expires: 365});
    setShowCookiesModal(false);
    showBodyOverflow();
  };
  return (
    <>
      <div className={styles.mainPage} data-testid='MainPage'>
        <Modal
          isOpen={showErrorModal}
          handleCloseModal={closeModal}
        >
          <ModalError error={error} handleCloseModal={closeModal}/>
        </Modal>
        <NewCollectionBlock />
        <NewArrivalsBlock />
        <SaleBlock />
        <BavovnaBlock />
        <BavovnaCoverImageBlock />
        <CategoriesBlock />
        <NewsLettersBlock />
        <Modal
          isOpen={showCookiesModal}
          handleCloseModal={closeModal}
        >
          <ModalCookies handleCloseModal={closeModal} handleConfirmModal={confirmCookies}/>
        </Modal>
      </div>
    </>
  );
};

export default MainPage;
