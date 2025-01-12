import React from 'react';
import styles from './EmptyBlock.module.scss';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const EmptyBlock = ({ description }) => {
  return (
    <div className={styles.emptyBlock} data-testid="EmptyBlock">
      <p className={styles.emptyBlock__description}>{description}</p>
      <Link className={styles.emptyBlock__button} to="/shop" aria-label="go to shopping">
        <span>go to shopping</span>
      </Link>
    </div>
  );
};
EmptyBlock.propTypes = {
  description: PropTypes.string.isRequired,
};
export default EmptyBlock;
