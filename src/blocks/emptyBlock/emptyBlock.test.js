import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import EmptyBlock from './emptyBlock';

describe('<Box />', () => {
  test('it should mount', () => {
    render(<EmptyBlock />);

    const emptyBlock = screen.getByTestId('EmptyBlock');

    expect(emptyBlock).toBeInTheDocument();
  });
});
