import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AlsoBoughtBlock from './AlsoBoughtBlock';

describe('<Box />', () => {
  test('it should mount', () => {
    render(<AlsoBoughtBlock />);

    const alsoBoughtBlock = screen.getByTestId('AlsoBoughtBlock');

    expect(alsoBoughtBlock).toBeInTheDocument();
  });
});
