import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SideNavigation from './sideNavigation';

describe('<Box />', () => {
  test('it should mount', () => {
    render(<SideNavigation sections={sections}/>);

    const navigation = screen.getByTestId('Navigation');

    expect(navigation).toBeInTheDocument();
  });
});
