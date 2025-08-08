import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the home page greeting', () => {
  render(<App />);
  const greetingElement = screen.getByText(/hi there/i);
  expect(greetingElement).toBeInTheDocument();
});
