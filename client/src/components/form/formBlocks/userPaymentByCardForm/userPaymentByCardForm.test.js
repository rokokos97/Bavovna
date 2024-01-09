import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import UserPaymentByCardForm from './userPaymentByCardForm';

describe('<Box />', () => {
  test('it should mount', () => {
    render(<UserPaymentByCardForm formik=''/>);

    const userPaymentByCardForm = screen.getByTestId('UserPaymentByCardForm');

    expect(userPaymentByCardForm).toBeInTheDocument();
  });
});
