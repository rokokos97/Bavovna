import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import DeleteIcon from './deleteIcon';

describe('<Box />', () => {
  test('it should mount', () => {
    render(<DeleteIcon />);

    const deleteIcon = screen.getByTestId('DeleteIcon');

    expect(deleteIcon).toBeInTheDocument();
  });
});
