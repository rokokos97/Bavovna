import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import RegisterFormBlock from './registerFormBlock';

describe('<Box />', () => {
  test('it should mount', () => {
    render(<RegisterFormBlock />);

    const registerFormBlock = screen.getByTestId('RegisterFormBlock');

    expect(registerFormBlock).toBeInTheDocument();
  });
});
