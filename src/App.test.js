import { render, screen } from '@testing-library/react';
import App from './App';

test('renders tagline', () => {
  render(<App />);
  const brandName = screen.getByAltText(/Treate/);
  expect(brandName).toBeInTheDocument();
});