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
  overflow: hidden;
`

const Emoji = styled.span`
  font-size: 3rem;
  transform: rotate(-45deg) perspective(0);
  display: inline-block;
  animation: offset 5s infinite;

  @keyframes offset {
    0% {
      transform: rotate(-45deg) translateX(0px)
    }
    50% {
      transform: rotate(-45deg) translateX(50px)
    }
    100% {
      transform: rotate(-45deg) translateX(0px)
    }
  }
`

const IntroLayout = ({ onClick }) => {
  return (
    <Wrapper>
      <EmojiWrapper>
        {data.foods.map(food => <Emoji key={food.name} role="img" aria-label="">{food.emoji}</Emoji>)}
      </EmojiWrapper>
      <IntroCard onClick={onClick} />
    </Wrapper>
  )
}

export default IntroLayout
