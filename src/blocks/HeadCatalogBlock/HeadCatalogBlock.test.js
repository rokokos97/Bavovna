import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import HeadCatalogBlock from './HeadCatalogBlock';

describe('<Box />', () => {
  test('it should mount', () => {
    render(<HeadCatalogBlock />);

    const headCatalogBlock = screen.getByTestId('HeadCatalogBlock');

    expect(headCatalogBlock).toBeInTheDocument();
  });
});
