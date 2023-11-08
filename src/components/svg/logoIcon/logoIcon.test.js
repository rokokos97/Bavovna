import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import LogoIcon from './logoIcon';

describe('<Box />', () => {
  test('it should mount', () => {
    render(<LogoIcon />);

    const logoIcon = screen.getByTestId('LogoIcon');

    expect(logoIcon).toBeInTheDocument();
  });
});
