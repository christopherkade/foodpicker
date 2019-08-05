import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const EmojiButton = styled.button`
  background: rgba(255,255,255, 0.5);
  text-align: center;
  padding: 1.5rem;
  font-size: 1.5rem;
  border: ${props => props.isSelected ? "1px solid red" : "1px solid white"};

  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }

  &:focus {
    outline: 1px solid #EF798A;
  }

  @media (max-width: 1280px) {
    padding: 0.5rem;
  }
`

const EmojiSelector = ({ name, emoji, onClick, isSelected }) => {
  return (
    <EmojiButton onClick={() => onClick(name, emoji)} title={name} isSelected={isSelected}>
      <span role="img" aria-label={name}>{emoji}</span>
    </EmojiButton>
  )
}

EmojiSelector.propTypes = {
  name: PropTypes.string.isRequired,
  emoji: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}

export default EmojiSelector
