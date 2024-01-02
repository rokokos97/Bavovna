import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ListWithRadioButtons from './ListWithRadioButtons';

describe('<Box />', () => {
  test('it should mount', () => {
    render(<ListWithRadioButtons />);

    const listWithRadioButtons = screen.getByTestId('ListWithRadioButtons');

    expect(listWithRadioButtons).toBeInTheDocument();
  });
});
