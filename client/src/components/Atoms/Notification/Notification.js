import React from "react"
import PropTypes from 'prop-types';
import styled from "styled-components"

const StyledNotification = styled.div`
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  background-color: #D52941;
  padding: 1rem;
  border-radius: 4px;
  color: white;
`

const Notification = ({ error }) => {
  return (
    <>
      {
        error ?
          <StyledNotification>
            {error}
          </StyledNotification > : null
      }
    </>
  )
}

Notification.propTypes = {
  error: PropTypes.string
}

export default Notification
