import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import UserDataForm from './userDataForm';

describe('<Box />', () => {
  test('it should mount', () => {
    render(<UserDataForm />);

    const userDataForm = screen.getByTestId('UserDataForm');

    expect(userDataForm).toBeInTheDocument();
  });
});
