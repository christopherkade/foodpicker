import React, { useState } from "react"
import styled from "styled-components"

import useWebsockets from "../../hooks/useWebsockets"
import { EmojiLayout } from "../EmojiLayout"
import { Link } from "../Link"
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
  padding: 5rem 10rem;

  @media (max-width: 1281px) {
    padding: 2rem 10rem;
  }

  @media (max-width: 1024px) {
    padding-bottom: 10rem;
  }

  @media (max-width: 769px) {
    padding: 2rem 1rem 10rem 1rem;
  }
`

const InfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 1024px) {
    display: inline-block;
    text-align: center;
  }
`

const BottomWrapper = styled.div`
  width: 100%;
  bottom: 0;
  text-align: center;
  margin-top: 1rem;

  @media (max-width: 1024px) {
    position: fixed;
    bottom: 0.625rem;
  }
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
        <InfoWrapper>
          <Title>Pick up to 4 types of food</Title>
          <Link link={link} />
        </InfoWrapper>
        <EmojiLayout onClick={handleEmoijiClick} />
      </TopWrapper>
      <BottomWrapper>
        <UserSelection selections={selections} />
        <Button onClick={() => setCompared(true)}>
          See results
        </Button>
      </BottomWrapper>
      {compared ? <CompareModal count={foodCount} onClick={() => setCompared(false)} /> : null}
    </Wrapper>
  )
}

export default MainLayout
