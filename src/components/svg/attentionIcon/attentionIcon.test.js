import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AttentionIcon from './attentionIcon';

describe('<Box />', () => {
  test('it should mount', () => {
    render(<AttentionIcon />);

    const attentionIcon = screen.getByTestId('AttentionIcon');

    expect(attentionIcon).toBeInTheDocument();
  });
});
