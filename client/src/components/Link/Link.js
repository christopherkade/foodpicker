import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import ClipboardJS from "clipboard"

const Wrapper = styled.div`
  padding: 1rem;
  text-align: center;
  border-radius: 4px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

const LinkText = styled.label`
  margin-right: 1rem;
`

const LinkInput = styled.input`
  background-color: white;
  font-size: 1.5rem;
  border-radius: 4px;
  border: 1px solid white;
  padding: 0.25rem;
  background-color: #EF798A;
  color: white;
  box-sizing: content-box;
  width: 30vw;

  &:focus {
    outline: transparent;
  }

  @media (max-width: 769px) {
    font-size: 1rem;
    width: 100%;
  }
`

const CopyButton = styled.span`
  font-size: 1.5rem;
  margin-left: 0.5rem;

  &:hover {
    cursor: pointer;
  }
`

const Link = ({ link }) => {
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    const clipboard = new ClipboardJS(".copy-button", {
      text() {
        return link
      },
    })

    clipboard.on("success", () => {
      setCopied(true)
    })
  }, [link])

  return (
    <Wrapper>
      <LinkText htmlFor="link">Share link:</LinkText>
      <LinkInput name="link" value={link} readOnly />
      <CopyButton role="img" aria-label="copy to clipboard" className="copy-button">
        {copied ? "✅" : "📋"}
      </CopyButton>
    </Wrapper>
  )
}

Link.propTypes = {
  link: PropTypes.string.isRequired
}

export default Link
