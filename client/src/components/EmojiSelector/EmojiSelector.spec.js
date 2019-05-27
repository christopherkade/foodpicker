import React from 'react'
import { render, cleanup, fireEvent } from 'react-testing-library'

import EmojiSelector from "./EmojiSelector"

afterEach(cleanup);

describe("<EmojiSelector />", () => {
  describe("Snapshots", () => {
    it("should match snapshot", () => {
      const { container } = render(<EmojiSelector emoji="🍕" name="Pizza" onClick={() => { }} />);
      expect(container).toMatchSnapshot();
    });
  })

  describe('emoji prop', () => {
    it('should display the emoji passed as a prop', () => {
      const { getByText } = render(<EmojiSelector emoji="🍕" name="Pizza" onClick={() => { }} />);
      expect(getByText("🍕")).toBeTruthy()
    });
  });

  describe('onClick prop', () => {
    it('should call onClick function when Button is clicked', () => {
      const onClickMock = jest.fn();
      const { getByText } = render(<EmojiSelector emoji="🍕" name="Pizza" onClick={onClickMock} />);
      fireEvent.click(getByText('🍕'));
      expect(onClickMock).toHaveBeenCalled();
    });
  });
})
