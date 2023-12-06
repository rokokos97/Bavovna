import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TextAreaField from './textAreaField';

describe('<Box />', () => {
  test('it should mount', () => {
    render(<TextAreaField />);

    const textAreaField = screen.getByTestId('TextAreaField');

    expect(textAreaField).toBeInTheDocument();
  });
});
