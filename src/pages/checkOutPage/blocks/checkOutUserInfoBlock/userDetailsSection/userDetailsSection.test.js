import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import UserDetailsSection from './userDetailsSection';

describe('<Box />', () => {
  test('it should mount', () => {
    render(<UserDetailsSection />);

    const userDetailsSection = screen.getByTestId('UserDetailsSection');

    expect(userDetailsSection).toBeInTheDocument();
  });
});
