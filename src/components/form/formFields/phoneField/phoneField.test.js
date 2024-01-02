import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PhoneField from './phoneField';

describe('<Box />', () => {
  test('it should mount', () => {
    render(<PhoneField />);

    const phoneField = screen.getByTestId('PhoneField');

    expect(phoneField).toBeInTheDocument();
  });
});
