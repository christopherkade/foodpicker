import React from 'react'
import { render, cleanup } from 'react-testing-library'

import IntroLayout from "./IntroLayout"

afterEach(cleanup);

describe("<IntroLayout />", () => {
  describe("Snapshots", () => {
    it("should match snapshot", () => {
      const { container } = render(<IntroLayout onClick={() => { }} />);
      expect(container).toMatchSnapshot();
    });
  })
})
