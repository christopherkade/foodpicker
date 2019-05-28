import styled from "styled-components"

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 300;
  color: ${props => props.color ? props.color : "black"}
`

export default Title
