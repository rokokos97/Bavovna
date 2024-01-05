import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import UnknownUserContactFormBlock from './unknownUserContactFormBlock';

describe('<Box />', () => {
  test('it should mount', () => {
    render(<UnknownUserContactFormBlock />);

    const anonimUserContactFormBlock = screen.getByTestId('AnonimUserContactFormBlock');

    expect(anonimUserContactFormBlock).toBeInTheDocument();
  });
});
