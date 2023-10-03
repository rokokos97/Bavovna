import React from 'react';
import styles from './page404.module.scss';
import {useNavigate} from 'react-router-dom';

const Page404 = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.page404} data-testid="Page404">
      <img src={`http://localhost:8000/api/uploads/notFoundPage.png`} alt='not found page image'/>
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
