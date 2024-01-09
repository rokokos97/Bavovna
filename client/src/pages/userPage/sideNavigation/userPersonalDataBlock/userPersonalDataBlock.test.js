import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import UserPersonalDataBlock from './userPersonalDataBlock';

describe('<Box />', () => {
  test('it should mount', () => {
    render(<UserPersonalDataBlock />);

    const userPersonalDataBlock = screen.getByTestId('UserPersonalDataBlock');

    expect(userPersonalDataBlock).toBeInTheDocument();
  });
});
