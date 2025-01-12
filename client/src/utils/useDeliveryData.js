import { useEffect } from 'react';
import npService from '../services/np.service';

function useDeliveryData(selectedCity, userCurrentDeliveryMethod, formik, setWarehousesList) {
  useEffect(() => {
    if (selectedCity) {
      npService.post({ cityRef: selectedCity.value }).then(async (data) => {
        setWarehousesList(await data);
      });
    }
  }, [selectedCity]);

  useEffect(() => {
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
}

export default useDeliveryData;
