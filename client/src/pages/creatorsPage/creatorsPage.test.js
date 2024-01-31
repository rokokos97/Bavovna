import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CreatorsPage from './CreatorsPage';

describe('<Box />', () => {
  test('it should mount', () => {
    render(<CreatorsPage />);

    const creatorsPage = screen.getByTestId('CreatorsPage');

    expect(creatorsPage).toBeInTheDocument();
  });
});
