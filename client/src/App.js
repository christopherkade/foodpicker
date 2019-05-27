import React, { useState, useEffect } from 'react';
import styled from "styled-components"

import './App.css';
import { IntroLayout } from "./components/IntroLayout"
import { MainLayout } from "./components/MainLayout"

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`

const App = () => {
  const [started, setStarted] = useState(false)

  const handleStart = () => {
    setStarted(true)
  }

  // On launch, check if the user is coming from a shared URL
  useEffect(() => {
    const { href } = window.location
    const urlContents = href.split("/")

    if (urlContents[urlContents.length - 1] === "") return

    setStarted(true)
  }, [])

  return (
    <>
      {
        !started ?
          <IntroLayout onClick={handleStart} />
          : <MainLayout />
      }
    </>
  );
}

export default App;
