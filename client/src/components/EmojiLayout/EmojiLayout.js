import React from "react"
import styled from "styled-components"

import { EmojiSelector } from "../EmojiSelector"
import data from "../../data/food.json"

const Wrapper = styled.ul`
  display: grid;
	grid-gap: 10px;
	grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
  grid-auto-flow: dense;
  margin: 0;
  padding: 0;
`

const EmojiLayout = ({ onClick }) => {
  return (
    <Wrapper>
      {data.foods.map(food => <EmojiSelector name={food.name} emoji={food.emoji} key={food.name} onClick={onClick} />)}
    </Wrapper>
  )
}

export default EmojiLayout
