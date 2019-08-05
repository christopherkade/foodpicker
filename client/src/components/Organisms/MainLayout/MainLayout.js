import React, { useState } from "react"
import styled from "styled-components"

import useWebsockets from "hooks/useWebsockets"
import { EmojiLayout } from "components/Molecules/EmojiLayout"
import { Link } from "components/Atoms/Link"
import { Button } from "components/Atoms/Button"
import { CompareModal } from "components/Molecules/CompareModal"
import { Notification } from "components/Atoms/Notification"
import { Title } from "components/Atoms/Title"

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
  position: fixed;
  bottom: 0.625rem;
`

const MainLayout = () => {
  const [selections, setSelections] = useState([])
  const [position, setPosition] = useState(0)
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
      oldSelections.splice(position, 1, { name, emoji })
      addFood([...oldSelections], sessionId, userId)

      // When we have reached the maximum number of items, go back to 0, otherwise move to the next one
      position >= 3 ? setPosition(0) : setPosition(prevPosition => prevPosition + 1)

      return [...oldSelections]
    })
  }

  return (
    <Wrapper>
      <Notification error={error} />

      <TopWrapper>
        <InfoWrapper>
          <Title size="1.5">Pick up to 4 types of food</Title>
          <Link link={link} />
        </InfoWrapper>

        <EmojiLayout onClick={handleEmoijiClick} selections={selections} />
      </TopWrapper>

      <BottomWrapper>
        <Button onClick={() => setCompared(true)} isShaking={selections.length === 4}>
          See results
        </Button>
      </BottomWrapper>

      {compared ? <CompareModal count={foodCount} onClick={() => setCompared(false)} /> : null}
    </Wrapper>
  )
}

export default MainLayout
