import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ColorsList from './ColorsList';

describe('<Box />', () => {
  test('it should mount', () => {
    render(<ColorsList itemColors='' selectedColor='' setSelectedColor=''/>);

    const colorsList = screen.getByTestId('ColorsList');

    expect(colorsList).toBeInTheDocument();
  });
});
