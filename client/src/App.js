import React, { useState, useEffect } from 'react';

import './App.css';
import { IntroLayout } from "./components/Organisms/IntroLayout"
import { MainLayout } from "./components/Organisms/MainLayout"

const App = () => {
  const [started, setStarted] = useState(false)

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
          <IntroLayout onClick={() => setStarted(true)} />
          : <MainLayout />
      }
    </>
  );
}

export default App;
