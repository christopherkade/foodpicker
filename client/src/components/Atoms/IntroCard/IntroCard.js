import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  background: rgba(239,121,138, 0.9);
  text-align: center;
  border-radius: 4px;
`

const CardTitle = styled.h1`
  color: white;
  font-weight: 300;
  font-size: 3rem;
  margin: 0;
`

const CardSubtitle = styled.p`
  color: white;
  font-weight: 300;
  font-size: 2rem;
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
        Fastfood
      </CardTitle>
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
