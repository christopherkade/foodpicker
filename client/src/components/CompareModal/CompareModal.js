import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import "./CompareModal.css"

const Title = styled.h1`
  font-size: 2rem;
`

const StyledList = styled.ul`
  list-style: none;
`

/**
 * Sort and clean the food array
 * @param {*} foodCount
 */
const sortFood = (foodCount) => {
  const keys = Object.keys(foodCount)
  const trimmedFood = keys.map(key => {
    if (key === "") return null

    const { name, emoji } = foodCount[key].obj

    return {
      name,
      emoji,
      count: foodCount[key].count
    }
  })
    .filter(food => food)
    .sort((a, b) => a.count - b.count)
    .reverse()

  return trimmedFood
}

const CompareLayout = ({ count, onClick }) => {
  let trimmedFood = sortFood(count)

  return (
    <details-dialog>
      <Title>Vote count</Title>
      <StyledList>
        {trimmedFood.map(food => <li key={food.name}>x{food.count} {food.emoji} ({food.name}) </li>)}
      </StyledList>
      <button onClick={onClick}>Close</button>
    </details-dialog>
  )
}

CompareLayout.propTypes = {
  count: PropTypes.object
}

CompareLayout.defaultProps = {
  count: {}
}

export default CompareLayout
