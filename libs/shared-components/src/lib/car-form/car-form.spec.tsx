import { render } from '@testing-library/react';

import CarForm from './car-form';

describe('CarForm', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CarForm />);
    expect(baseElement).toBeTruthy();
  });
});
