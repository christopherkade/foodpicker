import React from "react"
import PropTypes from 'prop-types';
import styled from "styled-components"

const StyledButton = styled.button`
  padding: 1rem;
  font-size: 1.5rem;
  background-color: white;
  border: 1px solid #EF798A;
  margin: 0.5rem;
  animation: ${props => props.isShaking ? "shake 0.82s cubic-bezier(.36,.07,.19,.97) both" : "none"};

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

  @keyframes shake {
    10%, 90% {
      transform: translate3d(-1px, 0, 0);
    }

    20%, 80% {
      transform: translate3d(2px, 0, 0);
    }

    30%, 50%, 70% {
      transform: translate3d(-4px, 0, 0);
    }

    40%, 60% {
      transform: translate3d(4px, 0, 0);
    }
}
`

const Button = ({ children, onClick, isShaking }) => {
  return (
    <StyledButton onClick={onClick} isShaking={isShaking}>
      {children}
    </StyledButton>
  )
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  isShaking: PropTypes.bool
}

export default Button
