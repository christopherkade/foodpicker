import React, { useState, useEffect } from 'react';

import './App.css';
import { IntroLayout } from "./components/IntroLayout"
import { MainLayout } from "./components/MainLayout"

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
