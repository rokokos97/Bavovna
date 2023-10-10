import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SizeGuide from './SizeGuide';

describe('<Box />', () => {
  test('it should mount', () => {
    render(<SizeGuide />);

    const sizeGuide = screen.getByTestId('SizeGuide');

    expect(sizeGuide).toBeInTheDocument();
  });
});
