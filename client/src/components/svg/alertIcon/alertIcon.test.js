import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AlertIcon from './AlertIcon';

describe('<Box />', () => {
  test('it should mount', () => {
    render(<AlertIcon />);

    const alertIcon = screen.getByTestId('AlertIcon');

    expect(alertIcon).toBeInTheDocument();
  });
});
