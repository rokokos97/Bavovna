import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AboutBlock from './AboutBlock';

describe('<Box />', () => {
  test('it should mount', () => {
    render(<AboutBlock />);

    const aboutBlock = screen.getByTestId('AboutBlock');

    expect(aboutBlock).toBeInTheDocument();
  });
});
