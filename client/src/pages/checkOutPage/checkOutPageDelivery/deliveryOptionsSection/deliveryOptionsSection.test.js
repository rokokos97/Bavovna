import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
describe('<Box />', () => {
  test('it should mount', () => {
    // eslint-disable-next-line react/no-unknown-property
    render(<deliveryOptionsSection deliveryMethods='' setUserCurrentDelivery='' userCurrentDelivery=''/>);

    const deliveryOptionsSection = screen.getByTestId('deliveryOptionsSection');

    expect(deliveryOptionsSection).toBeInTheDocument();
  });
});
