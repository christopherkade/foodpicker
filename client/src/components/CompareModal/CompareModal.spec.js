import React from 'react';
import CompareModal from './CompareModal';
import { render, cleanup } from 'react-testing-library';

afterEach(cleanup)

jest.mock("react-chartjs-2", () => ({
  HorizontalBar: "canvas"
}))

describe('<CompareModal />', () => {
  describe('Snapshots', () => {
    it('should match snapshot', () => {
      const { container } = render(<CompareModal onClick={() => { }} />);
      expect(container).toMatchSnapshot();
    });
  });
});
