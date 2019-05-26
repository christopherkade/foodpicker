import React, { useState } from "react"
import styled from "styled-components"

import useWebsockets from "../../hooks/useWebsockets"
import { EmojiLayout } from "../EmojiLayout"
import { LinkCard } from "../LinkCard"
import { UserSelection } from "../UserSelection"
import { CompareButton } from "../CompareButton"
import { CompareModal } from "../CompareModal"

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
  const [compared, setCompared] = useState(false)
  const [{ link, sessionId, userId, foodCount }, { addFood }] = useWebsockets()

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

  /**
   * Triggers the comparison and displays the comparison layout
   */
  const handleCompare = () => {
    setCompared(true)
  }

  return (
    <Wrapper>
      <>
        <EmojiLayout onClick={handleEmoijiClick} />
        <BottomWrapper>
          <UserSelection selections={selections} />
          <CompareButton onClick={handleCompare} />
          <LinkCard link={link} />
        </BottomWrapper>
      </>
      {compared ? <CompareModal count={foodCount} onClick={() => setCompared(false)} /> : null}
    </Wrapper>
  )
}

export default MainLayout
