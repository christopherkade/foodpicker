import { useState, useEffect } from "react"
import socketIOClient from "socket.io-client";

// TODO: Handle endpoint based on dev / prod
const socket = socketIOClient("http://localhost:3001");

/* eslint-disable */
const useWebsockets = () => {
  const [link, setLink] = useState("Fetching link...")
  const [userId, setUserId] = useState()
  const [sessionId, setSessionId] = useState()

  // Check if a session exists, if so join it
  // If not, create one and display its link
  useEffect(() => {
    // Check if the URL contains a session ID
    let { href } = window.location
    const urlContents = href.split("/")
    const sessionId = urlContents[urlContents.length - 1]

    if (sessionId === "") {
      socket.emit("first-client")
      socket.on("new-session", ({ sessionId }) => {
        let newLink = href += sessionId
        setUserId(0)
        setSessionId(sessionId)
        setLink(newLink)
      });
    } else {
      socket.emit("join-session", sessionId)
      socket.on("session-joined", ({ userId }) => {
        setUserId(userId)
        setSessionId(sessionId)
        setLink(href)
      })
    }
  }, [])

  const addFood = (food, sessionId, userId) => {
    socket.emit("add-food", food, sessionId, userId)
  }

  return [{ link, userId, sessionId }, addFood]
}

export default useWebsockets
