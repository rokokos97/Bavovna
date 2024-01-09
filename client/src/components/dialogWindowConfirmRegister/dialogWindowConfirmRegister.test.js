import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import DialogWindowConfirmRegister from './DialogWindowConfirmRegister';

describe('<Box />', () => {
  test('it should mount', () => {
    render(<DialogWindowConfirmRegister onClose='' onConfirm='' message=''/>);

    const dialogWindowConfirmRegister = screen.getByTestId('DialogWindowConfirmRegister');

    expect(dialogWindowConfirmRegister).toBeInTheDocument();
  });
});
