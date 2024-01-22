import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import LoaderIcon from './LoaderIcon';

describe('<Box />', () => {
  test('it should mount', () => {
    render(<LoaderIcon />);

    const loaderIcon = screen.getByTestId('LoaderIcon');

    expect(loaderIcon).toBeInTheDocument();
  });
});
