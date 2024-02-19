import React from 'react';
import styles from './Page404.module.scss';
import {useNavigate} from 'react-router-dom';
import NotFoundPageImage from '../../components/svg/NotFoundPageImage/NotFoundPageImage';

const Page404 = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.page404} data-testid="Page404">
      <NotFoundPageImage />
      <p>
        The page you are looking for does not exist or has been moved.
      </p>
      <button
        onClick={()=> navigate(('/'))}
      >
        <span>
        go to shop
        </span>
      </button>
    </div>
  );
};

export default Page404;
