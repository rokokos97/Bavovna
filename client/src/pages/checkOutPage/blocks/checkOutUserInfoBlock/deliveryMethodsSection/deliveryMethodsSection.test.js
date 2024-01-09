import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import DeliveryMethodsSection from './deliveryMethodsSection';

describe('<Box />', () => {
  test('it should mount', () => {
    render(<DeliveryMethodsSection deliveryMethods='' setUserCurrentDelivery='' userCurrentDelivery=''/>);

    const deliveryMethodsSection = screen.getByTestId('DeliveryMethodsSection');

    expect(deliveryMethodsSection).toBeInTheDocument();
  });
});
