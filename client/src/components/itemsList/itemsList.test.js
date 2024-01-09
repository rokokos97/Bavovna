import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ItemsList from './ItemsList';

describe('<Box />', () => {
  test('it should mount', () => {
    render(<ItemsList />);

    const itemsList = screen.getByTestId('ItemsList');

    expect(itemsList).toBeInTheDocument();
  });
});
