import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ModalVerifyEmail from './ModalVerifyEmail';

describe('<Box />', () => {
  test('it should mount', () => {
    render(<ModalVerifyEmail />);

    const modalVerifyEmail = screen.getByTestId('ModalVerifyEmail');

    expect(modalVerifyEmail).toBeInTheDocument();
  });
});
