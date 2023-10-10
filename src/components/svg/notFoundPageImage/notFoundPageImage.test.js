import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import NotFoundPageImage from './notFoundPageImage';

describe('<Box />', () => {
  test('it should mount', () => {
    render(<NotFoundPageImage />);

    const notFoundPageImage = screen.getByTestId('NotFoundPageImage');

    expect(notFoundPageImage).toBeInTheDocument();
  });
});
