import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import BavovnaImgBlock from './BavovnaImgBlock';

describe('<Box />', () => {
  test('it should mount', () => {
    render(<BavovnaImgBlock />);

    const bavovnaImgBlock = screen.getByTestId('BavovnaImgBlock');

    expect(bavovnaImgBlock).toBeInTheDocument();
  });
});
