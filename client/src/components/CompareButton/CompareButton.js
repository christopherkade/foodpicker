import React from "react"
import styled from "styled-components"

const StyledCompareButton = styled.button`
  padding: 1rem;
  font-size: 1rem;
  background-color: white;
  border: 1px solid #EF798A;
  margin: 0.5rem;

  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }

  & > span {
    font-size: 1.5rem;
  }

  &:focus {
    outline: transparent;
  }
`

const CompareButton = ({ onClick }) => {
  return (
    <StyledCompareButton onClick={onClick}>
      <span role="img" aria-label="">🍴</span> Compare <span role="img" aria-label="">🍴</span>
    </StyledCompareButton>
  )
}

export default CompareButton
