import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ResetPasswordForm from './ResetPasswordForm';

describe('<Box />', () => {
  test('it should mount', () => {
    render(<ResetPasswordForm />);

    const resetPasswordForm = screen.getByTestId('ResetPasswordForm');

    expect(resetPasswordForm).toBeInTheDocument();
  });
});
