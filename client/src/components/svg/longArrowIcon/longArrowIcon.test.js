import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import LongArrowIcon from './LongArrowIcon';

describe('<Box />', () => {
  test('it should mount', () => {
    render(<LongArrowIcon />);

    const longArrowIcon = screen.getByTestId('LongArrowIcon');

    expect(longArrowIcon).toBeInTheDocument();
  });
});
