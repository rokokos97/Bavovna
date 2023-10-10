import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ChevronDown from './ChevronDown';

describe('<Box />', () => {
  test('it should mount', () => {
    render(<ChevronDown />);

    const chevronDown = screen.getByTestId('ChevronDown');

    expect(chevronDown).toBeInTheDocument();
  });
});
