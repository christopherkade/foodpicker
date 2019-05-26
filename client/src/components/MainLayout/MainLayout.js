import React, { useState } from "react"
import styled from "styled-components"

import useWebsockets from "../../hooks/useWebsockets"
import { EmojiLayout } from "../EmojiLayout"
import { LinkCard } from "../LinkCard"
import { UserSelection } from "../UserSelection"

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`

const BottomWrapper = styled.div`
  position: fixed;
  width: 100%;
  bottom: 0;
  text-align: center;
  margin-top: 1rem;
`

const MainLayout = () => {
  const [selections, setSelections] = useState(Array(4).fill({ name: "", emoji: "" }))
  const [{ link, sessionId, userId }, addFood] = useWebsockets()

  /**
   * On food click, add an item to our selection array
   * If the array is full, reset it
   * @param {*} name
   * @param {*} emoji
   */
  const handleEmoijiClick = (name, emoji) => {
    setSelections((oldSelections) => {
      // Find the first empty item
      let index = oldSelections.findIndex((oldSelection) => oldSelection.name === "")

      if (index === -1) {
        oldSelections = Array(4).fill({ name: "", emoji: "" })
        index = 0;
      }
      oldSelections.splice(index, 1, { name, emoji })
      addFood([...oldSelections], sessionId, userId)
      return [...oldSelections]
    })
  }

  return (
    <Wrapper>
      <EmojiLayout onClick={handleEmoijiClick} />
      <BottomWrapper>
        <UserSelection selections={selections} />
        <LinkCard link={link} />
      </BottomWrapper>
    </Wrapper>
  )
}

export default MainLayout
