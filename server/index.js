const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

const PORT = process.env.PORT || 3001

// Contains all of our user sessions
let sessions = []

const errors = {
  NO_SESSION: "This session does not exist"
}

const getCurrentSession = (sessionId) => {
  return sessions.find(session => session.id === sessionId)
}

const getCurrentUser = (userId, session) => {
  if (!session) return
  return session.users.find(user => user.userId === userId)
}

const closeCurrentSession = (sessionId) => {
  sessions = sessions
    .filter(session => session.id !== sessionId)
}

/**
 * Gets the total food count of a given session
 * @param {*} sessionId
 */
const getFoodCount = (sessionId) => {
  const currentSession = getCurrentSession(sessionId)

  let matchingFood = currentSession.users.map((user) => {
    return user.food
  })

  const counts = matchingFood.reduce((count, arr) => {
    arr.forEach((obj) => {
      if (!count[obj.name]) {
        count[obj.name] = {
          obj,
          count: 0
        }
      }
      count[obj.name].count += 1
    })
    return count
  }, {})

  return counts
}

/**
 * Sends a message to all clients in a given session
 */
const sendToClients = (sessionId, type, message) => {
  const currentSession = getCurrentSession(sessionId)
  console.log(currentSession)
  currentSession.users.map(user => {
    user.client.emit(type, message)
  })
}

io.on('connection', (socket) => {
  console.log("*** New client connected ***")

  let sessionId
  let userId

  /**
   * Called on first connection
   * Creates a random session ID and initialize the first user
   */
  socket.on("first-client", () => {
    sessionId = Math.random().toString(36).substring(7);
    userId = 0

    console.log("Generating random session ID:", sessionId);

    console.log("Creating session", sessionId)
    const newSession = {
      id: sessionId,
      users: [
        {
          userId: 0,
          food: [],
          client: socket
        }
      ]
    }

    sessions.push(newSession)
    socket.emit("new-session", { sessionId })
  })

  /**
   * Called when the user joins an existing session
   * Gives the user their ID
   */
  socket.on("join-session", (sId) => {
    sessionId = sId
    console.log("New client joining", sessionId)

    const currentSession = getCurrentSession(sessionId)

    if (!currentSession) {
      console.warn("User trying to join a non-existing session")
      socket.emit("err", errors.NO_SESSION)
      return
    }

    userId = currentSession.users.length

    currentSession.users.push({
      userId,
      food: [],
      client: socket
    })

    console.log(`Client ${userId} has joined the session`)
    socket.emit("session-joined", { userId })

    // Get initial food count upon joining
    const foodCount = getFoodCount(sessionId)
    sendToClients(sessionId, "food-count-update", foodCount)
  })

  /**
   * Called when the user clicks on food
   * Updates the user's food selection
   */
  socket.on("add-food", (food, sessionId, userId) => {
    console.log(`Adding foods ${food} for user ${userId} in session ${sessionId}`);
    const currentSession = getCurrentSession(sessionId)
    const currentUser = getCurrentUser(userId, currentSession)

    if (!currentUser) return

    currentUser.food = food

    const foodCount = getFoodCount(sessionId)

    sendToClients(sessionId, "food-count-update", foodCount)
  })

  /**
   * On user disconnection, remove them from session
   * Close session if no users are left
   */
  socket.on("disconnect", () => {
    console.log(`User ${userId} disconnected from session ${sessionId}`)

    const currentSession = getCurrentSession(sessionId)

    if (!currentSession) return

    currentSession.users = currentSession.users
      .filter(user => user.userId !== userId)

    // If no more users are in this session, close it
    if (currentSession.users.length === 0) {
      closeCurrentSession(sessionId)
    }
  });
});

http.listen(PORT, () => {
  console.log(`Fastfood server listening on port ${PORT} 🍕`);
});
