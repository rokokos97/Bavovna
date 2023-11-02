import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ModalLogin from './modalLogin';

describe('<Box />', () => {
  test('it should mount', () => {
    render(<ModalLogin />);

    const modalLogin = screen.getByTestId('ModalLogin');

    expect(modalLogin).toBeInTheDocument();
  });
});
