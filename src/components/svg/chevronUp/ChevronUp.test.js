import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ChevronUp from './ChevronUp';

describe('<Box />', () => {
  test('it should mount', () => {
    render(<ChevronUp />);

    const chevronUp = screen.getByTestId('ChevronUp');

    expect(chevronUp).toBeInTheDocument();
  });
});
