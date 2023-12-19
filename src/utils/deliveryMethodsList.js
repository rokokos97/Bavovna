import NovaPoshtaWarehouseForm from '../components/form/formBlocks/novaPoshtaWarehouseForm/novaPoshtaWarehouseForm';
import NovaPoshtaAddressDeliveryForm
  from '../components/form/formBlocks/novaPoshtaAddressDeliveryForm/novaPoshtaAddressDeliveryForm';
import NovaInternationalAddressDeliveryForm
  from '../components/form/formBlocks/novaInternationalAddressDeliveryForm/novaInternationalAddressDeliveryForm';
import React from 'react';

const deliveryMethodsList = [
  {
    _id: '1', label: 'Nova poshta delivery to the post office', value: <NovaPoshtaWarehouseForm
    />,
  }, {
    _id: '2', label: 'Nova poshta delivery to the address', value: <NovaPoshtaAddressDeliveryForm
    />,
  }, {
    _id: '3', label: 'International delivery', value: <NovaInternationalAddressDeliveryForm
    />,
  },
];

export const deliveryMethodsObject = {
  1: {label: 'Nova poshta delivery to the post office', value: <NovaPoshtaWarehouseForm/>},
  2: {label: 'Nova poshta delivery to the address', value: <NovaPoshtaAddressDeliveryForm/>},
  3: {label: 'International delivery', value: <NovaInternationalAddressDeliveryForm/>},
};
export default deliveryMethodsList;
