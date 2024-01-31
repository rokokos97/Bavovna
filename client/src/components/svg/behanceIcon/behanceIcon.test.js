import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import BehanceIcon from './BehanceIcon';

describe('<Box />', () => {
  test('it should mount', () => {
    render(<BehanceIcon />);

    const behanceIcon = screen.getByTestId('BehanceIcon');

    expect(behanceIcon).toBeInTheDocument();
  });
});
