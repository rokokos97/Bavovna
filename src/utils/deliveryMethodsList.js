import NovaPoshtaWarehouseForm from '../components/form/formBlocks/novaPoshtaWarehouseForm/novaPoshtaWarehouseForm';
import NovaPoshtaAddressDeliveryForm
  from '../components/form/formBlocks/novaPoshtaAddressDeliveryForm/novaPoshtaAddressDeliveryForm';
import NovaInternationalAddressDeliveryForm
  from '../components/form/formBlocks/novaInternationalAddressDeliveryForm/novaInternationalAddressDeliveryForm';
import React from 'react';
const deliveryMethodsList = {
  1:
    {
      1: {
        _id: '1',
        label: 'Nova poshta delivery to the post office',
        value: <NovaPoshtaWarehouseForm isButton={true}/>,
        price: 2,
      },
      2: {
        _id: '2',
        label: 'Nova poshta delivery to the address',
        value: <NovaPoshtaAddressDeliveryForm isButton={true}/>,
        price: 3,
      },
      3: {
        _id: '3',
        label: 'International delivery',
        value: <NovaInternationalAddressDeliveryForm isButton={true}/>,
        price: 20,
      },
    },
  2: {
    1: {
      _id: '1',
      label: 'Nova poshta delivery to the post office',
      value: <NovaPoshtaWarehouseForm isButton={false}/>,
      price: 2,
    },
    2: {
      _id: '2',
      label: 'Nova poshta delivery to the address',
      value: <NovaPoshtaAddressDeliveryForm isButton={false}/>,
      price: 3,
    },
    3: {
      _id: '3',
      label: 'International delivery',
      value: <NovaInternationalAddressDeliveryForm isButton={false}/>,
      price: 20,
    },
  },
};
export default deliveryMethodsList;
