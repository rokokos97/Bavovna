import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import UserDeliveryBlock from './userDeliveryBlock';

describe('<Box />', () => {
  test('it should mount', () => {
    render(<UserDeliveryBlock />);

    const userDeliveryBlock = screen.getByTestId('UserDeliveryBlock');

    expect(userDeliveryBlock).toBeInTheDocument();
  });
});
