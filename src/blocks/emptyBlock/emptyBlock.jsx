import React from 'react';
import styles from './emptyBlock.module.scss';
import PropTypes from 'prop-types';
import {useNavigate} from 'react-router-dom';

const EmptyBlock = ({description}) => {
  const navigate = useNavigate();
  return (
    <div className={styles.emptyBlock} data-testid="EmptyBlock">
      <p className={styles.description}>{description}</p>
      <button
        className={styles.button}
        onClick={() => navigate('/')}
      >
        <span>go to shopping</span>
      </button>
    </div>
  );
};
EmptyBlock.propTypes = {
  description: PropTypes.string.isRequired,
};
export default EmptyBlock;
