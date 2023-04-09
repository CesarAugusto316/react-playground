import { render } from '@testing-library/react';

import Marvel from './marvel';

describe('Marvel', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Marvel />);
    expect(baseElement).toBeTruthy();
  });
});
