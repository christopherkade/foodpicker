import React from "react"
import styled from "styled-components"

const StyledButton = styled.button`
  padding: 1rem;
  font-size: 1rem;
  background-color: white;
  border: 1px solid #EF798A;
  margin: 0.5rem;

  & > span {
    font-size: 1.5rem;
  }

  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }

  &:focus {
    outline: transparent;
  }
`

const Button = ({ children, onClick }) => {
  return (
    <StyledButton onClick={onClick}>
      {children}
    </StyledButton>
  )
}

export default Button
