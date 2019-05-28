import React from "react"
import styled from "styled-components"

import { IntroCard } from "../IntroCard"
import data from "../../data/food.json"

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`

const EmojiWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -1;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(7, 1fr);
  align-items: center;
  justify-items: center;
  overflow: hidden;
`

const Emoji = styled.span`
  font-size: 3rem;
  display: inline-block;
  animation: scroll 20s infinite linear;

  @keyframes scroll {
    0% {
      transform: translateY(0px)
    }
    50% {
      transform: translateY(-500px)
    }
    100% {
      transform: translateY(0px)
    }
  }
`

const IntroLayout = ({ onClick }) => {
  const foodCopy = [...data.foods]

  // Add some more emojis to the mix
  foodCopy.forEach(food => {
    foodCopy.push(food)
  })

  return (
    <Wrapper>
      <EmojiWrapper>
        {foodCopy.map((food, index) => <Emoji key={index} role="img" aria-label="">{food.emoji}</Emoji>)}
      </EmojiWrapper>
      <IntroCard onClick={onClick} />
    </Wrapper>
  )
}

export default IntroLayout
