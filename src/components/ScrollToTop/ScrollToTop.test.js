import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ScrollToTop from './ScrollToTop';

describe('<Box />', () => {
  test('it should mount', () => {
    render(<ScrollToTop />);

    const scrollToTop = screen.getByTestId('ScrollToTop');

    expect(scrollToTop).toBeInTheDocument();
  });
});
