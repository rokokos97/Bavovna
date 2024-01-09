import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Dropdown from './Dropdown';

describe('<Box />', () => {
  test('it should mount', () => {
    render(<Dropdown id='' name='' placeholder='' inner=''/>);

    const dropdown = screen.getByTestId('Dropdown');

    expect(dropdown).toBeInTheDocument();
  });
});
