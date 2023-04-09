import { render } from '@testing-library/react';

import DC from './dc';

describe('DC', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DC />);
    expect(baseElement).toBeTruthy();
  });
});
