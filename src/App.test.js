import { render, screen } from '@testing-library/react';
import App from './App';

test('renders petstore login heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/petstore admin/i);
  expect(headingElement).toBeInTheDocument();
});
