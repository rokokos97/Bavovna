import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ModalCookies from './modalCookies';

describe('<Box />', () => {
  test('it should mount', () => {
    render(<ModalCookies />);

    const ModalCookies = screen.getByTestId('ModalCookies');

    expect(ModalCookies).toBeInTheDocument();
  });
});
