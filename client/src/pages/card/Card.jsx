import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getItemsList, getItemsLoadingStatus } from '../../store/itemsSlice';
import { CardMasterProvider } from '../../providers/CardMasterProvider';
import CardContext from './CardContext';

const Card = () => {
  const { id } = useParams();
  const items = useSelector(getItemsList);
  const isItemsLoading = useSelector(getItemsLoadingStatus);

  if (!isItemsLoading && items) {
    const searchingItem = items.filter((item) => item._id === id)[0];
    return (
      <CardMasterProvider>
        <CardContext item={searchingItem} />
      </CardMasterProvider>
    );
  }
};

export default Card;
