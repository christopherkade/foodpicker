import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import { Title } from "components/Atoms/Title"

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  background: rgba(239,121,138, 0.9);
  text-align: center;
  border-radius: 4px;
`

const CardSubtitle = styled.p`
  color: white;
  font-weight: 300;
  font-size: 2rem;
  margin: 0;
`

const StartButton = styled.button`
  border: 1px solid white;
  border-radius: 4px;
  background-color: transparent;
  color: white;
  font-size: 1.5rem;
  margin: 3.125rem 1rem 1rem 1rem;

  &:hover {
    cursor: pointer;
  }

  &:focus {
    outline-color: #E2DFE0;
  }
`

const IntroCard = ({ onClick }) => {
  return (
    <CardWrapper>
      <Title color="white" size="3">
        Fastfood
      </Title>
      <CardSubtitle>
        Argue less, eat more
      </CardSubtitle>

      <StartButton onClick={onClick}>
        Let's go !
      </StartButton>
    </CardWrapper>
  )
}

IntroCard.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default IntroCard
