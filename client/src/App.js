import React, { useState, useEffect } from 'react';

import './App.css';
import { IntroLayout } from "./components/Organisms/IntroLayout"
import { MainLayout } from "./components/Organisms/MainLayout"

const App = () => {
  const [started, setStarted] = useState(false)

  /**
   * On launch, check if the user is coming from a referal URL
   */
  useEffect(() => {
    const { pathname } = window.location

    // The user isn't coming from a referal link, keep them here
    if (pathname === "/" || pathname.includes("producthunt")) return

    // They are, launch the application
    setStarted(true)
  }, [])

  const launch = () => {
    // Check if the URL contains a product hunt search query
    // If so, remove it on launch
    if (window.location.search) {
      window.history.replaceState(null, null, window.location.pathname);
    }

    setStarted(true)
  }

  return (
    <>
      {
        !started ?
          <IntroLayout onClick={launch} />
          : <MainLayout />
      }
    </>
  );
}

export default App;
