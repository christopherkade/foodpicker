import React from 'react'
import { render, cleanup } from 'react-testing-library'

import UserSelection from "./UserSelection"

afterEach(cleanup);

describe("<UserSelection />", () => {
  let selections = null

  beforeEach(() => {
    selections = [
      {
        emoji: "🍕",
        name: "Pizza"
      }
    ]
  })

  describe("Snapshots", () => {
    it("should match snapshot", () => {
      const { container } = render(<UserSelection selections={selections} />);
      expect(container).toMatchSnapshot();
    });
  })
})
