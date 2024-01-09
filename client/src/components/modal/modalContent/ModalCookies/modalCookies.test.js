import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('<Box />', () => {
  test('it should mount', () => {
    const ModalCookies = screen.getByTestId();
    render(<ModalCookies />);
    expect(ModalCookies).toBeInTheDocument();
  });
});
