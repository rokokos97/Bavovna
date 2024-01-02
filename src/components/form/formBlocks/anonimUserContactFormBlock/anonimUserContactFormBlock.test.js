import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AnonimUserContactFormBlock from './anonimUserContactFormBlock';

describe('<Box />', () => {
  test('it should mount', () => {
    render(<AnonimUserContactFormBlock />);

    const anonimUserContactFormBlock = screen.getByTestId('AnonimUserContactFormBlock');

    expect(anonimUserContactFormBlock).toBeInTheDocument();
  });
});
