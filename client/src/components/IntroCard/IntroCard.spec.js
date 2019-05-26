import React from 'react'
import { render, cleanup } from 'react-testing-library'

import IntroCard from "./IntroCard"

afterEach(cleanup);

describe("<IntroCard />", () => {
  describe("Snapshots", () => {
    it("should match snapshot", () => {
      const { container } = render(<IntroCard onClick={() => { }} />);
      expect(container).toMatchSnapshot();
    });
  })
})
