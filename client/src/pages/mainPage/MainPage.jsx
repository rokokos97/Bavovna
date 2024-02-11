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
import {showBodyOverflow, hideBodyOverflow} from '../../services/modal.service';
import Cookies from 'js-cookie';
import {getCategoriesError, getCategoriesLoadingStatus} from '../../store/categorySlice';
import {useSelector} from 'react-redux';
import {getColorsError, getColorsLoadingStatus} from '../../store/colorsSlice';
import {getCitiesError, getCitiesIsLoadingStatus} from '../../store/citiesSlice';
import {getItemsError, getItemsLoadingStatus} from '../../store/itemsSlice';
import ModalError from '../../components/modal/modalContent/modalError/modalError';
import Loader from '../../components/loader/loader';
import ModalEducationProject from '../../components/modal/modalContent/ModalEducationProject/modalEducationProject';
import sessionStorageService from '../../services/sessionStorage.service';
const MainPage = () => {
  const categoriesError = useSelector(getCategoriesError());
  const categoriesListIsLoading = useSelector(getCategoriesLoadingStatus());
  const colorsError = useSelector(getColorsError());
  const colorsListIsLoading = useSelector(getColorsLoadingStatus());
  const itemsError = useSelector(getItemsError());
  const itemsListIsLoading = useSelector(getItemsLoadingStatus());
  const citiesErrors = useSelector(getCitiesError());
  const citiesIsLoading = useSelector(getCitiesIsLoadingStatus());
  const [error, setError] = useState(null);
  const [showEducationModal, setShowEducationModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [showCookiesModal, setShowCookiesModal] = useState(true);
  useEffect(() => {
    const userConsent = Cookies.get('userConsent');
    if (!userConsent) {
      setShowCookiesModal(true);
      hideBodyOverflow();
    }
    const userModal = sessionStorageService.getModalConfirm();
    if (!userModal) {
      setShowEducationModal(true);
      hideBodyOverflow();
    }
  }, []);
  useEffect(() => {
    if (categoriesError || colorsError || itemsError || citiesErrors) {
      setError(categoriesError || colorsError || itemsError || citiesErrors);
      setShowErrorModal(true);
      hideBodyOverflow();
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
  const confirmModal = () => {
    sessionStorageService.setModalConfirm();
    setShowEducationModal(false);
    showBodyOverflow();
  };
  //  !categoriesListIsLoading && !colorsListIsLoading && !citiesIsLoading&& !itemsListIsLoading
  return (
    <>
      <div className={styles.mainPage} data-testid='MainPage'>
        {
          (categoriesListIsLoading || colorsListIsLoading || citiesIsLoading || itemsListIsLoading) && <Loader/>
        }
        <Modal
          isOpen={showEducationModal}
          handleCloseModal={closeModal}
        >
          <ModalEducationProject handleConfirmModal={confirmModal}/>
        </Modal>
        <Modal
          isOpen={showErrorModal}
          handleCloseModal={closeModal}
        >
          <ModalError error={error} handleCloseModal={closeModal}/>
        </Modal>
        <Modal
          isOpen={showCookiesModal}
          handleCloseModal={closeModal}
        >
          <ModalCookies handleCloseModal={closeModal} handleConfirmModal={confirmCookies}/>
        </Modal>
        <NewCollectionBlock />
        <NewArrivalsBlock />
        <SaleBlock />
        <BavovnaBlock />
        <BavovnaCoverImageBlock />
        <CategoriesBlock />
        <NewsLettersBlock />
      </div>
    </>
  );
};

export default MainPage;
