import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CheckboxBlock from './CheckboxBlock';

describe('<Box />', () => {
  test('it should mount', () => {
    render(<CheckboxBlock />);

    const checkboxBlock = screen.getByTestId('CheckboxBlock');

    expect(checkboxBlock).toBeInTheDocument();
  });
});
