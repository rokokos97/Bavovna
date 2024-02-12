import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ProposeBlock from './ProposeBlock';

describe('<Box />', () => {
  test('it should mount', () => {
    render(<ProposeBlock />);

    const proposeBlock = screen.getByTestId('ProposeBlock');

    expect(proposeBlock).toBeInTheDocument();
  });
});
