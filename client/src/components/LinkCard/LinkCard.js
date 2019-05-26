import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const Wrapper = styled.div`
  padding: 1rem;
  background-color: #EF798A;
  text-align: center;
  border-radius: 4px;
  margin-top: 0.3125rem;
`

const LinkText = styled.p`
  color: white;
  margin: 0 0 1rem 0;
`

const Link = styled.input`
  background-color: white;
  font-size: 1rem;
  border-radius: 4px;
  border: 1px solid white;
  padding: 0.25rem;
  width: 350px;

  &:focus {
    outline: transparent;
  }
`

const LinkCard = ({ link }) => {
  return (
    <Wrapper>
      <LinkText>Share this link with your friends!</LinkText>
      <Link value={link} readOnly />
    </Wrapper>
  )
}

LinkCard.propTypes = {
  link: PropTypes.string.isRequired
}

export default LinkCard
