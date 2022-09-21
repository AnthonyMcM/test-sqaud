import { render, RenderResult, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import '@testing-library/jest-dom';

import CarForm from './car-form';

describe('CarForm', () => {
  let result: RenderResult;
  let mockOnSubmit: jest.Mock;

  beforeEach(() => {
    mockOnSubmit = jest.fn();
    result = render(<CarForm onSubmit={mockOnSubmit} />);
  });

  it('should render successfully', () => {
    const { baseElement } = result;
    expect(baseElement).toBeTruthy();
  });

  it('should match snapshot', () => {
    const { baseElement } = result;
    expect(baseElement).toMatchSnapshot();
  });

  it('should allow user to type', async () => {
    const formData = {
      make: 'BMW',
      model: '1 Series',
      reg: 'BC1 XC3',
      price: '1000',
    };

    const { getByLabelText } = result;
    const makeInput = getByLabelText('Make');
    await userEvent.type(makeInput, formData.make);

    const modelInput = getByLabelText('Model');
    await userEvent.type(modelInput, formData.model);

    const regInput = getByLabelText('Registration');
    await userEvent.type(regInput, formData.reg);

    const priceInput = getByLabelText('Price');
    await userEvent.type(priceInput, formData.price);

    await userEvent.click(result.getByText('Submit car'));

    expect(mockOnSubmit).toHaveBeenCalledWith(formData);
  });
});
