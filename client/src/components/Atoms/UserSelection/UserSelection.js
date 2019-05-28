import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  width: 100%;
`

const SelectionBox = styled.input`
  width: 50px;
  height: 50px;
  background-color: white;
  border: 1px solid white;
  font-size: 1.5rem;
  text-align: center;
  margin: 0.1rem;

  &:focus {
    outline: transparent;
  }

  &:hover {
    cursor: default;
  }
`

const UserSelection = ({ selections }) => {
  return (
    <Wrapper>
      {selections.map((selection, index) => <SelectionBox key={index} value={selection.emoji} readOnly />)}
    </Wrapper>
  )
}

export default UserSelection
