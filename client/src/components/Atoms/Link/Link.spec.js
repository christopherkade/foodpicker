import React from 'react'
import { render, cleanup } from 'react-testing-library'

import Link from "./Link"

afterEach(cleanup);

describe("<Link />", () => {
  describe("Snapshots", () => {
    it("should match snapshot", () => {
      const { container } = render(<Link link="mockedLink" />);
      expect(container).toMatchSnapshot();
    });
  })
})
