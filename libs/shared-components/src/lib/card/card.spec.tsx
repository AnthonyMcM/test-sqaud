import { render, screen } from '@testing-library/react';

import Card from './card';

describe('Card', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <Card make="BMW" model="1 Series" price="1000" reg="B24 XPC" />
    );
    // screen.debug();
    expect(baseElement).toMatchSnapshot();
  });

  it.only('Should display make and model', () => {
    const result = render(
      <Card make="BMW" model="1 Series" price="1000" reg="B24 XPC" />
    );

    const heading = result.getByText('BMW 1 Series');
    expect(heading).toBeTruthy();

    const reg = result.getByText('B24 XPC');
    expect(reg).toBeTruthy();

    const price = result.getAllByText('Price £2000');
    expect(price).toBeTruthy();
  });
});
