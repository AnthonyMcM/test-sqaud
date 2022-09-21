import { render } from '@testing-library/react';

import MainHeading from './shared-components';

describe('SharedComponents', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MainHeading />);
    expect(baseElement).toMatchSnapshot();
  });

  it('Should have text', () => {
    const result = render(<MainHeading children="Test" />);
    result.getByText('Test');
  });
});
