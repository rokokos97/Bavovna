import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import RadioButtonEmptyIcon from './radioButtonEmptyIcon';

describe('<Box />', () => {
  test('it should mount', () => {
    render(<RadioButtonEmptyIcon />);

    const radioButtonEmptyIcon = screen.getByTestId('RadioButtonEmptyIcon');

    expect(radioButtonEmptyIcon).toBeInTheDocument();
  });
});
