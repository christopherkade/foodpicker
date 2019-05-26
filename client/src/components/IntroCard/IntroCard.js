import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  background-color: #EF798A;
  text-align: center;
  border-radius: 4px;
`

const CardTitle = styled.h1`
  color: white;
  font-weight: 300;
  font-size: 1.5rem;
  margin: 0;
`

const CardSubtitle = styled.p`
  color: white;
  font-weight: 300;
  font-size: 1rem;
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
      <CardTitle>
        Welcome to Fastfood
      </CardTitle>
      <span role="img" aria-label="">🍕🥑🍣🍜</span>
      <CardSubtitle>
        The easiest way to pick what to eat !
      </CardSubtitle>

      <StartButton onClick={onClick}>
        Start a session
      </StartButton>
    </CardWrapper>
  )
}

IntroCard.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default IntroCard
