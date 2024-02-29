import React, {useEffect, useState} from 'react';
import styles from './MainPage.module.scss';
import NewArrivalsBlock from './NewArrivalsBlock/NewArrivalsBlock';
import NewCollectionBlock from './NewCollectionBlock/NewCollectionBlock';
import SaleBlock from './SummerSaleBlock/SaleBlock';
import BavovnaBlock from './BavovnaTextBlock/BavovnaBlock';
import NewsLettersBlock from './NewsLettersBlock/NewsLettersBlock';
import BavovnaCoverImageBlock from './BavovnaCoverImageBlock/BavovnaCoverImageBlock';
import CategoriesBlock from './CategoriesBlock/CategoriesBlock';
import Cookies from 'js-cookie';
import {getCategoriesError, getCategoriesLoadingStatus} from '../../store/categorySlice';
import {useSelector} from 'react-redux';
import {getColorsError, getColorsLoadingStatus} from '../../store/colorsSlice';
import {getCitiesError, getCitiesIsLoadingStatus} from '../../store/citiesSlice';
import {getItemsError, getItemsLoadingStatus} from '../../store/itemsSlice';
import ModalError from '../../components/ModalError/ModalError';
import ModalCookies from '../../components/ModalCookies/ModalCookies';
import Loader from '../../components/Loader/Loader';
// import ModalEducationProject from '../../components/modal/modalContent/ModalEducationProject/ModalEducationProject';
// import sessionStorageService from '../../services/sessionStorage.service';
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
  //  const [showEducationModal, setShowEducationModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [showCookiesModal, setShowCookiesModal] = useState(false);
  useEffect(() => {
    const userConsent = Cookies.get('userConsent');
    if (!userConsent) {
      setShowCookiesModal(true);
    //    const userModal = sessionStorageService.getModalConfirm();
    //    if (!userModal) {
    //      setShowEducationModal(true);
    //    }
  }, []);
  useEffect(() => {
    if (categoriesError || colorsError || itemsError || citiesErrors) {
      setError(categoriesError || colorsError || itemsError || citiesErrors);
      setShowErrorModal(true);
    }
  }, [categoriesError, colorsError, itemsError, citiesErrors]);
  const closeCookiesModal = () => {
    setShowCookiesModal(false);
  };
  const closeErrorModal = () => {
    setShowErrorModal(false);
  };
  const confirmCookies = () => {
    Cookies.set('userConsent', 'true', {expires: 365});
    setShowCookiesModal(false);
  };
  //  const confirmModal = () => {
  //    sessionStorageService.setModalConfirm();
  //    setShowEducationModal(false);
  //  };
  return (
    <section className={styles.mainPage}>
      {
        (categoriesListIsLoading || colorsListIsLoading || citiesIsLoading || itemsListIsLoading) && <Loader/>
      }
      {/* {showEducationModal && <ModalEducationProject handleConfirmModal={confirmModal}/>}*/}
      {showErrorModal && <ModalError error={error} handleCloseModal={closeErrorModal}/>}
      {showCookiesModal && <ModalCookies handleCloseModal={closeCookiesModal} handleConfirmModal={confirmCookies}/>}
      <NewCollectionBlock />
      <NewArrivalsBlock />
      <SaleBlock />
      <BavovnaBlock />
      <BavovnaCoverImageBlock />
      <CategoriesBlock />
      <NewsLettersBlock />
    </section>
  );
};

export default MainPage;
