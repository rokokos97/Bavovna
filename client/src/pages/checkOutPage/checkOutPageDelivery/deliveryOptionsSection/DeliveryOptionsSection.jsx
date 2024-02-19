import React, {useEffect, useState} from 'react';
import styles from './DeliveryOptionsSection.module.scss';
import {useDispatch, useSelector} from 'react-redux';
import {getIsLoggedIn, getUser} from '../../../../store/userSlice';
import {
  getDeliveryMethod,
  getDeliveryOption,
  setDeliveryMethod,
  setDeliveryOption, setUserDeliveryInfo,
} from '../../../../store/ordersSlice';
import UserDeliveryAddressList
  from '../../../userPage/sideNavigation/userPersonalDataBlock/userDeliveryBlock/UserDeliveryAddressList/UserDeliveryAddressList';
import UserDeliveryMethodsList from './userDeliveryMethodsList/UserDeliveryMethodsList';
import {useFormik} from 'formik';
import npService from '../../../../services/np.service';
import deliveryMethodsList from '../../../../utils/deliveryMethodsList';
import {
  validationSchemaNPDeliveryAddress, validationSchemaNPDeliveryInternational,
  validationSchemaNPDeliveryWarehouse,
} from '../../../../utils/validationSchema';
import {useNavigate} from 'react-router-dom';
import createDeliveryLabel from '../../../../utils/createDeliveryLabel';
import RadioButtonCheckedIcon
  from '../../../../components/svg/radioButtonIcons/RadioButtonCheckedIcon/RadioButtonCheckedIcon';
import RadioButtonEmptyIcon
  from '../../../../components/svg/radioButtonIcons/RadioButtonEmptyIcon/RadioButtonEmptyIcon';
import LeftArrowIcon from '../../../../components/svg/arrowIcons/LeftArrowIcon/LeftArrowIcon';
const deliveryOptionsSection = () => {
  const navigate = useNavigate();
  const isLoggedIn = useSelector(getIsLoggedIn);
  const user = useSelector(getUser);
  const userCurrentDeliveryOption = useSelector(getDeliveryOption());
  const userCurrentDeliveryMethod = useSelector(getDeliveryMethod());
  const dispatch = useDispatch();
  const [selectedCity, setSelectedCity] = useState();
  const [warehousesList, setWarehousesList] = useState([]);
  const initialValues= {
    city: {},
    warehouse: {},
    street: '',
    houseNumber: '',
    flatNumber: '',
    intDeliveryAddress: '',
  };
  const validationSchema = (deliveryMethod) => {
    switch (deliveryMethod) {
      case 'Nova post delivery to the post office':
        return validationSchemaNPDeliveryWarehouse;
      case 'Nova post delivery to the address':
        return validationSchemaNPDeliveryAddress;
      case 'International delivery':
        return validationSchemaNPDeliveryInternational;
      default:
        return validationSchemaNPDeliveryWarehouse;
    }
  };
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: userCurrentDeliveryOption !== 'saved address'? validationSchema(userCurrentDeliveryMethod): null,
    onSubmit: (values) => {
      if (userCurrentDeliveryOption === 'new address') {
        const newValues = {};
        Object.keys(values).forEach((key)=> {
          if (Object.keys(values[key]).length !==0) {
            newValues[key] = values[key];
          }
        });
        newValues.label = createDeliveryLabel(newValues);
        newValues.deliveryMethod = userCurrentDeliveryMethod;
        newValues.deliveryPrice = deliveryMethodsList[2][userCurrentDeliveryMethod].price;
        dispatch(setUserDeliveryInfo(newValues));
        navigate('/cart/checkoutPayment');
      } else {
        dispatch(setUserDeliveryInfo(user.deliveryAddress.find((address)=> address._id === user.currentDeliveryAddress)));
        navigate('/cart/checkoutPayment');
      }
    },
  });
  const handleCityChange = (value) => {
    setSelectedCity(value);
    formik.setFieldValue('city', value);
  };
  const handleWarehouseChange = (value) => {
    formik.setFieldValue('warehouse', value);
  };
  const selectedValue = (id) => {
    dispatch(setDeliveryMethod(deliveryMethodsList[1][id].label));
  };
  useEffect(()=>{
    if (selectedCity) {
      npService.post({cityRef: selectedCity?.value}).then(async (data)=> {
        setWarehousesList(await data);
      });
    }
  }, [selectedCity]);
  useEffect(()=>{
    formik.resetForm({
      values: {
        city: {},
        warehouse: {},
        street: '',
        houseNumber: '',
        flatNumber: '',
      },
    });
  }, [userCurrentDeliveryMethod, formik.resetForm]);
  useEffect(()=>{
    dispatch(setDeliveryMethod('Nova post delivery to the post office'));
  }, []);
  const deliveryOptionsList = [
    {
      id: '1',
      label: 'new address',
      value: <UserDeliveryMethodsList
        formik={formik}
        warehouseList={warehousesList}
        selectedValue={selectedValue}
        handleCityChange={handleCityChange}
        handleWarehouseChange={handleWarehouseChange}
      />,
    },
    {
      id: '2',
      label: 'saved address',
      value: <UserDeliveryAddressList hiddenButton={true}/>,
    },
  ];
  return (
    <div className={styles.deliveryOptionsSection} data-testid="deliveryOptionsSection">
      <p className={styles.title}>Delivery</p>
      <div className={styles.radioBlock}>
        {deliveryOptionsList.map((method, index)=> <div key={index}>
          <div
            className={styles.radioWrapper}
          >
            <button
              className={styles.radioButton}
              type='button'
              disabled={!isLoggedIn || user?.deliveryAddress.length === 0}
              onClick = {()=> dispatch(setDeliveryOption(method.label))}
            >
              {userCurrentDeliveryOption === method.label ? <RadioButtonCheckedIcon/>:<RadioButtonEmptyIcon/>}
            </button>
            <label
              className={styles.label}
            >
              {method.label}
            </label>
          </div>
        </div>)}
      </div>
      <form
        onSubmit={formik.handleSubmit}
      >
        {deliveryOptionsList.map((method)=>userCurrentDeliveryOption === method.label ? <div key={method.id}>{method.value}</div> : null)}
        <div className={styles.navigationButtonsSection}>
          <button
            type='button'
            onClick={()=> navigate(-1) }
            className={styles.buttonLeft}
          >
            <LeftArrowIcon/>
            <span>
                go back
            </span>
          </button>
          <button
            className={styles.buttonRight}
            type='submit'
            disabled={userCurrentDeliveryOption === 'new address'?!formik.isValid || !formik.dirty:false}
          >
            <span>
                next step
            </span>
            <LeftArrowIcon/>
          </button>
        </div>
      </form>
    </div>
  );
};
export default deliveryOptionsSection;
