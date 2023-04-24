import ExpectedPropertiesView from './ExpectedProperties.view';
import { render, screen } from 'src/utils/test-utils';
import { fakeEmployees } from 'src/mocks/employees';

it('renders with expected values', () => {
  render(<ExpectedPropertiesView fakeEmployees={fakeEmployees} />)
  expect(screen.getByRole('cell', { name: /john smith/i })).toBeInTheDocument();
  expect(screen.getByRole('cell', { name: /engineering/i })).toBeInTheDocument();
  expect(screen.getByRole('cell', { name: /designer/i })).toBeInTheDocument();
});
