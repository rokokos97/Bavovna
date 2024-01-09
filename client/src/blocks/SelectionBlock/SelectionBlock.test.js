import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SelectionBlock from './SelectionBlock';

describe('<Box />', () => {
  test('it should mount', () => {
    render(<SelectionBlock />);

    const selectionBlock = screen.getByTestId('SelectionBlock');

    expect(selectionBlock).toBeInTheDocument();
  });
});
