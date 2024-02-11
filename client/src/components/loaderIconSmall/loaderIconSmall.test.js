import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import LoaderIconSmall from './LoaderIconSmall';

describe('<Box />', () => {
  test('it should mount', () => {
    render(<LoaderIconSmall />);

    const loaderIconSmall = screen.getByTestId('LoaderIconSmall');

    expect(loaderIconSmall).toBeInTheDocument();
  });
});
