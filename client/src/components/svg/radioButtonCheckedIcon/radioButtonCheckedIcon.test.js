import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import RadioButtonCheckedIcon from './radioButtonCheckedIcon';

describe('<Box />', () => {
  test('it should mount', () => {
    render(<RadioButtonCheckedIcon />);

    const radioButtonCheckedIcon = screen.getByTestId('RadioButtonCheckedIcon');

    expect(radioButtonCheckedIcon).toBeInTheDocument();
  });
});
