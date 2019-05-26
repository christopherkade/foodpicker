import React from 'react'
import { render, cleanup } from 'react-testing-library'

import LinkCard from "./LinkCard"

afterEach(cleanup);

describe("<LinkCard />", () => {
  describe("Snapshots", () => {
    it("should match snapshot", () => {
      const { container } = render(<LinkCard link="mockedLink" />);
      expect(container).toMatchSnapshot();
    });
  })
})
