import React from 'react';
import PropTypes from 'prop-types';
import {useSelector} from 'react-redux';
import {getItems, getItemsLoadingStatus} from '../../store/itemsSlice';
import {CardMasterProvider} from '../../Providers/CardMasterProvider';
import CardContext from './CardContext';

const Card = ({searchingId = '1'}) => {
  const items = useSelector(getItems());
  const isItemsLoading = useSelector(getItemsLoadingStatus());

  if (!isItemsLoading && items) {
    const item = items[searchingId];

    return (
      <CardMasterProvider>
        <CardContext item={item} />
      </CardMasterProvider>
    );
  }
};

Card.propTypes = {
  searchingId: PropTypes.string.isRequired,
};

export default Card;
