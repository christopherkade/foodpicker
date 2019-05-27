import React from 'react'
import { render, cleanup } from 'react-testing-library'

import MainLayout from "./MainLayout"

afterEach(cleanup);

describe("<MainLayout />", () => {
  describe("Snapshots", () => {
    xit("should match snapshot", () => {
      const { container } = render(<MainLayout />);
      expect(container).toMatchSnapshot();
    });
  })
})
