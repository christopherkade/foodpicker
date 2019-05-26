import React from "react"
import styled from "styled-components"

const EmojiButton = styled.button`
  background: rgba(255,255,255, 0.5);
  text-align: center;
  padding: 1.5rem;
  font-size: 1.5rem;
  border: 1px solid white;

  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }

  &:focus {
    outline: 1px solid #EF798A;
  }
`

const EmojiSelector = ({ name, emoji, onClick }) => {
  return (
    <EmojiButton onClick={() => onClick(name, emoji)}>
      <span role="img" aria-label={name}>{emoji}</span>
    </EmojiButton>
  )
}

export default EmojiSelector
