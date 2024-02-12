import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import FashionBlock from './FashionBlock';

describe('<Box />', () => {
  test('it should mount', () => {
    render(<FashionBlock />);

    const fashionBlock = screen.getByTestId('FashionBlock');

    expect(fashionBlock).toBeInTheDocument();
  });
});
