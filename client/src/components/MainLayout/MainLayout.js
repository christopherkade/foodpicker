import React, { useState } from "react"
import styled from "styled-components"

import useWebsockets from "../../hooks/useWebsockets"
import { EmojiLayout } from "../EmojiLayout"
import { LinkCard } from "../LinkCard"
import { UserSelection } from "../UserSelection"
import { Button } from "../Button"
import { CompareModal } from "../CompareModal"
import { Notification } from "../Notification"

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`

const TopWrapper = styled.div`
  padding: 0rem 10rem;

  @media (max-width: 769px) {
    padding: 1rem;
  }
`

const BottomWrapper = styled.div`
  width: 100%;
  bottom: 0;
  text-align: center;
  margin-top: 1rem;
`

const Title = styled.h1`
  font-size: 1.5rem;
`

const MainLayout = () => {
  const [selections, setSelections] = useState(Array(4).fill({ name: "", emoji: "" }))
  const [compared, setCompared] = useState(false)
  const [{ link, sessionId, userId, foodCount, error }, { addFood }] = useWebsockets()

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
      <Notification error={error} />
      <TopWrapper>
        <LinkCard link={link} />
        <Title>Pick up to 4 types of food</Title>
        <EmojiLayout onClick={handleEmoijiClick} />
      </TopWrapper>
      <BottomWrapper>
        <UserSelection selections={selections} />
        <Button onClick={() => setCompared(true)}>
          Results
        </Button>
      </BottomWrapper>
      {compared ? <CompareModal count={foodCount} onClick={() => setCompared(false)} /> : null}
    </Wrapper>
  )
}

export default MainLayout
