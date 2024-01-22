import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ModalError from './ModalError';

describe('<Box />', () => {
  test('it should mount', () => {
    render(<ModalError />);

    const modalError = screen.getByTestId('ModalError');

    expect(modalError).toBeInTheDocument();
  });
});
