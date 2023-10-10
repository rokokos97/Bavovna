import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SizesList from './SizesList';

describe('<Box />', () => {
  test('it should mount', () => {
    render(<SizesList />);

    const sizesList = screen.getByTestId('SizesList');

    expect(sizesList).toBeInTheDocument();
  });
});
