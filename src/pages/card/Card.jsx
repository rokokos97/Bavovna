import React from 'react';
import PropTypes from 'prop-types';
import {NotFoundPage} from '../notFoundPage/notFoundPage';
import {SizesList} from '../../components/sizeList/SizesList';

import {searchItem} from '../../logic/searchItem';

import things from '../../api/things.json';

const Card = ({searchingId = 1}) => {
  const thing = searchItem(things, searchingId);
  if (thing) {
    const {id, name, price, sizes} = thing;
    return (
      <section className="card">
        <div className="imgs">
          <ul className="imgs-list">
            <li className="imgs-list__item">
              <img src="/img/models/model_1/img_1.jpg" alt="img_1" />
            </li>
            <li className="imgs-list__item">
              <img src="/img/models/model_1/img_2.jpg" alt="img_2" />
            </li>
            <li className="imgs-list__item">
              <img src="/img/models/model_1/img_3.jpg" alt="img_3" />
            </li>
          </ul>
        </div>
        <div className="mainImg">
          <img src="/img/models/model_1/img_1_main.jpg" alt="" />
        </div>
        <div className="about">
          <form className="buy-form">
            <h2 className="buy-form__title">{name}</h2>
            <span className="buy-form__price">${price}</span>
            <div className="size">
              <span>Size</span>
              <SizesList sizes={sizes} />
            </div>
            <div className="form-bag">
              <button>ADD TO BAG</button>
            </div>
          </form>
        </div>
      </section>
    );
  } else {
    return <NotFoundPage />;
  }
};
Card.propTypes = {
  searchingId: PropTypes.number.isRequired,
};

export {Card};
