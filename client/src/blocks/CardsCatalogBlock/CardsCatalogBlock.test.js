import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CardsCatalogBlock from './CardsCatalogBlock';

describe('<Box />', () => {
  test('it should mount', () => {
    render(<CardsCatalogBlock />);

    const cardsCatalogBlock = screen.getByTestId('CardsCatalogBlock');

    expect(cardsCatalogBlock).toBeInTheDocument();
  });
});
