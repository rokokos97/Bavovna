import React from 'react';
import {useParams} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {getItems, getItemsLoadingStatus} from '../../store/itemsSlice';
import {getColors, getColorsLoadingStatus} from '../../store/colorsSlice';
import {CardMasterProvider} from '../../Providers/CardMasterProvider';
import CardContext from './CardContext';

const Card = () => {
  const {id} = useParams();
  const items = useSelector(getItems());
  const isItemsLoading = useSelector(getItemsLoadingStatus());
  const colors = useSelector(getColors());
  const isColorsLoading = useSelector(getColorsLoadingStatus());

  console.log('colors: ', colors);
  console.log('isColorsLoading: ', isColorsLoading);

  if (!isItemsLoading && items) {
    const searchingItem = items.filter((item) => item._id === id)[0];
    //    console.log('searchingItem', searchingItem);
    return (
      <CardMasterProvider>
        <CardContext item={searchingItem} colors={colors} />
      </CardMasterProvider>
    );
  }
};

export default Card;
