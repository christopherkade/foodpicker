import React from 'react'
import { render, cleanup } from 'react-testing-library'

import EmojiSelector from "./EmojiSelector"

afterEach(cleanup);

describe("<EmojiSelector />", () => {
  describe("Snapshots", () => {
    it("should match snapshot", () => {
      const { container } = render(<EmojiSelector />);
      expect(container).toMatchSnapshot();
    });
  })
})
