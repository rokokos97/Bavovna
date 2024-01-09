import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import UserPage from './userPage';

describe('<Box />', () => {
  test('it should mount', () => {
    render(<UserPage />);

    const userPage = screen.getByTestId('UserPage');

    expect(userPage).toBeInTheDocument();
  });
});
