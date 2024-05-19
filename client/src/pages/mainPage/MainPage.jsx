import React, {Suspense, useEffect, useState} from 'react';
import styles from './MainPage.module.scss';
import Cookies from 'js-cookie';
import {getCategoriesError, getCategoriesLoadingStatus} from '../../store/categorySlice';
import {useSelector} from 'react-redux';
import {getColorsError, getColorsLoadingStatus} from '../../store/colorsSlice';
import {getCitiesError, getCitiesIsLoadingStatus} from '../../store/citiesSlice';
import {getItemsError, getItemsLoadingStatus} from '../../store/itemsSlice';
import ModalError from '../../components/ModalError/ModalError';
import ModalCookies from '../../components/ModalCookies/ModalCookies';
import Loader from '../../components/Loader/Loader';
const NewCollectionBlock = React.lazy(() => import('./NewCollectionBlock/NewCollectionBlock'));
const NewArrivalsBlock = React.lazy(() => import('./NewArrivalsBlock/NewArrivalsBlock'));
const SaleBlock = React.lazy(() => import('./SummerSaleBlock/SaleBlock'));
const BavovnaBlock = React.lazy(() => import('./BavovnaTextBlock/BavovnaBlock'));
const NewsLettersBlock = React.lazy(() => import('./NewsLettersBlock/NewsLettersBlock'));
const BavovnaCoverImageBlock = React.lazy(()=>import('./BavovnaCoverImageBlock/BavovnaCoverImageBlock'));
const CategoriesBlock = React.lazy(() => import('./CategoriesBlock/CategoriesBlock'));
// import ModalEducationProject from '../../components/modal/modalContent/ModalEducationProject/ModalEducationProject';
// import sessionStorageService from '../../services/sessionStorage.service';
const MainPage = () => {
  const categoriesError = useSelector(getCategoriesError);
  const categoriesListIsLoading = useSelector(getCategoriesLoadingStatus);
  const colorsError = useSelector(getColorsError);
  const colorsListIsLoading = useSelector(getColorsLoadingStatus);
  const itemsError = useSelector(getItemsError);
  const itemsListIsLoading = useSelector(getItemsLoadingStatus);
  const citiesErrors = useSelector(getCitiesError);
  const citiesIsLoading = useSelector(getCitiesIsLoadingStatus);
  const [error, setError] = useState(null);
  //  const [showEducationModal, setShowEducationModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [showCookiesModal, setShowCookiesModal] = useState(false);
  useEffect(() => {
    const userConsent = Cookies.get('userConsent');
    if (!userConsent && !categoriesListIsLoading && !colorsListIsLoading && !itemsListIsLoading && !citiesIsLoading) {
      setShowCookiesModal(true);
    //    const userModal = sessionStorageService.getModalConfirm();
    //    if (!userModal) {
    //      setShowEducationModal(true);
    //    }
    }
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
    <Suspense fallback={<Loader/>}>
      <section className={styles.mainPage}>
        {/* {*/}
        {/*  (categoriesListIsLoading || colorsListIsLoading || citiesIsLoading || itemsListIsLoading) && <Loader/>*/}
        {/* }*/}
        {/* {showEducationModal && <ModalEducationProject handleConfirmModal={confirmModal}/>}*/}
        {showErrorModal && <ModalError error={error} handleCloseModal={closeErrorModal}/>}
        {showCookiesModal && <ModalCookies handleCloseModal={closeCookiesModal} handleConfirmModal={confirmCookies}/>}
        <NewCollectionBlock />
        <NewArrivalsBlock title={'new arrivals'}/>
        <SaleBlock />
        <BavovnaBlock />
        <BavovnaCoverImageBlock />
        <CategoriesBlock />
        <NewsLettersBlock />
      </section>
    </Suspense>
  );
};

export default MainPage;
