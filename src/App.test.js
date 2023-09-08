import { render, screen } from '@testing-library/react';
import App from './App';

test('renders 3 list items', () => {
  render(<App />);
  const listItems = screen.getAllByRole('listitem');
  expect(listItems.length).toBe(3);
});

test('renders title', () => {
  render(<App />);
  const element = screen.getByTestId('mytestid');
  expect(element).toBeInTheDocument();
});

test('renders span', () => {
  render(<App />);
  const element = screen.getByTitle('sum');
  expect(element.textContent).toBe('3');
});
