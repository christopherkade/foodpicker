import React from 'react'
import { render, cleanup } from 'react-testing-library'

import Title from "./Title"

afterEach(cleanup);

describe("<Title />", () => {
  describe("Snapshots", () => {
    it("should match snapshot", () => {
      const { container } = render(<Title>Hello World</Title>);
      expect(container).toMatchSnapshot();
    });
  })

  describe("children prop", () => {
    it("should display the children pop", () => {
      const { getByText } = render(<Title>Display me!</Title>)
      expect(getByText("Display me!")).toBeTruthy()
    })
  })
})
