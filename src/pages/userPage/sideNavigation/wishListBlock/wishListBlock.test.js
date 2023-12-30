import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import WishListBlock from './wishListBlock';

describe('<Box />', () => {
  test('it should mount', () => {
    render(<WishListBlock />);

    const wishListBlock = screen.getByTestId('WishListBlock');

    expect(wishListBlock).toBeInTheDocument();
  });
});
