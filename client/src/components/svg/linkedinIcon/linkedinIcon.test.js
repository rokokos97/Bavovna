import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import LinkedinIcon from './LinkedinIcon';

describe('<Box />', () => {
  test('it should mount', () => {
    render(<LinkedinIcon />);

    const linkedinIcon = screen.getByTestId('LinkedinIcon');

    expect(linkedinIcon).toBeInTheDocument();
  });
});
