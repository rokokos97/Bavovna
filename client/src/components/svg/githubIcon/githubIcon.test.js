import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import GithubIcon from './GithubIcon';

describe('<Box />', () => {
  test('it should mount', () => {
    render(<GithubIcon />);

    const githubIcon = screen.getByTestId('GithubIcon');

    expect(githubIcon).toBeInTheDocument();
  });
});
