import { render, screen } from '../../utils/test-utils';
import BasicPage from './BasicPage';

it('displays the heading', () => {
  render(<BasicPage />);
});

it('displays the heading with getByText', () => {
  render(<BasicPage />);
  screen.getByText(/welcome to our site!/i);
});

// ERROR: Test without assertions
// Erease the '.skip' to see the error
it.skip('displays the heading with getByRole', () => {
  render(<BasicPage />);
  screen.getByRole('heading', { name: /welcome to our site!/i });
});

// Test with assertions
it('displays the heading with getByRole', () => {
  render(<BasicPage />);
  expect(
    screen.getByRole('heading', { name: /welcome to our site!/i })
  ).toBeInTheDocument()
});
