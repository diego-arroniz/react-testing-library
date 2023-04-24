import ExpectedProperties from './ExpectedProperties.component';
import { render } from 'src/utils/test-utils';


it('displays the heading', () => {
  render(<ExpectedProperties />);
});