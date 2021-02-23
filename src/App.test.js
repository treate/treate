import { render, screen } from '@testing-library/react';
import App from './App';

test('renders tagline', () => {
  render(<App />);
  const brandTagline = screen.getByText(/Connect. Coach. Create./i);
  expect(brandTagline).toBeInTheDocument();
});