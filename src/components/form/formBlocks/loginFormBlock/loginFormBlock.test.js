import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import LoginFormBlock from './loginFormBlock';

describe('<Box />', () => {
  test('it should mount', () => {
    render(<LoginFormBlock />);

    const loginFormBlock = screen.getByTestId('LoginFormBlock');

    expect(loginFormBlock).toBeInTheDocument();
  });
});
