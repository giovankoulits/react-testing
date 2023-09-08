import { render, screen } from '@testing-library/react';
import Login from './Login';
test('username input should be rendered', () => {
  render(<Login />);
  const userInput = screen.getByPlaceholderText(/username/i);
  expect(userInput).toBeInTheDocument();
});

test('password input should be rendered', () => {
  render(<Login />);
  const userInput = screen.getByPlaceholderText(/password/i);
  expect(userInput).toBeInTheDocument();
});

test('button input should be rendered', () => {
  render(<Login />);
  const userInput = screen.getByRole('button');
  expect(userInput).toBeInTheDocument();
});
