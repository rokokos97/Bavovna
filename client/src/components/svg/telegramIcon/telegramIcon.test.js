import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TelegramIcon from './TelegramIcon';

describe('<Box />', () => {
  test('it should mount', () => {
    render(<TelegramIcon />);

    const telegramIcon = screen.getByTestId('TelegramIcon');

    expect(telegramIcon).toBeInTheDocument();
  });
});
