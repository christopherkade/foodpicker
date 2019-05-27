import React from 'react'
import { render, cleanup } from 'react-testing-library'

import Notification from "./Notification"

afterEach(cleanup);

describe("<Notification />", () => {
  describe("Snapshots", () => {
    it("should match snapshot", () => {
      const { container } = render(<Notification />);
      expect(container).toMatchSnapshot();
    });
  })
})
