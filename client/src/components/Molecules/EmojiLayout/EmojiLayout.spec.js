import React from 'react'
import { render, cleanup } from 'react-testing-library'

import EmojiLayout from "./EmojiLayout"

afterEach(cleanup);

describe("<EmojiLayout />", () => {
  describe("Snapshots", () => {
    it("should match snapshot", () => {
      const { container } = render(<EmojiLayout onClick={() => { }} />);
      expect(container).toMatchSnapshot();
    });
  })
})
