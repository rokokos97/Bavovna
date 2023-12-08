import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import NovaPoshtaWarehouseForm from './novaPoshtaWarehouseForm';

describe('<Box />', () => {
  test('it should mount', () => {
    render(<NovaPoshtaWarehouseForm />);

    const novaPoshtaWarehouseForm = screen.getByTestId('NovaPoshtaWarehouseForm');

    expect(novaPoshtaWarehouseForm).toBeInTheDocument();
  });
});
