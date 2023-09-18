import React from 'react';
import PropTypes from 'prop-types';
import {CardMasterProvider} from '../../Providers/CardMasterProvider';
import CardContext from './CardContext';

const Card = ({searchingId = '1'}) => {
  return (
    <CardMasterProvider>
      <CardContext searchingId={searchingId} />
    </CardMasterProvider>
  );
};

Card.propTypes = {
  searchingId: PropTypes.string.isRequired,
};

export default Card;
