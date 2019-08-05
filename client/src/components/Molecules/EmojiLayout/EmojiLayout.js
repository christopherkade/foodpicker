import React from "react"
import PropTypes from 'prop-types';
import styled from "styled-components"

import { EmojiSelector } from "components/Atoms/EmojiSelector"
import data from "data/food.json"

const Wrapper = styled.ul`
  display: grid;
	grid-gap: 10px;
	grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
  grid-auto-flow: dense;
  margin: 0;
  padding: 0;
`

const EmojiLayout = ({ onClick, selections }) => {
  return (
    <Wrapper>
      {data.foods.map(food =>
        <EmojiSelector
          name={food.name}
          emoji={food.emoji}
          key={food.name}
          onClick={onClick}
          isSelected={selections.some(selection => selection.name === food.name)}
        />)}
    </Wrapper>
  )
}

EmojiLayout.propTypes = {
  onClick: PropTypes.func,
  selections: PropTypes.array
}

export default EmojiLayout
