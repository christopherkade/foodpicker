const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

const PORT = process.env.PORT || 3001

// Contains all of our user sessions
const sessions = []

const getCurrentSession = (sessionId) => {
  return sessions.find(session => session.id === sessionId)
}

const getCurrentUser = (userId, session) => {
  return session.users.find(user => user.userId === userId)
}

io.on('connection', (socket) => {
  console.log("*** New client connected ***")

  /**
   * Called on first connection
   * Creates a random session ID and initialize the first user
   */
  socket.on("first-client", () => {
    const sessionId = Math.random().toString(36).substring(7);
    console.log("Generating random session ID:", sessionId);

    console.log("Creating session", sessionId)
    const newSession = {
      id: sessionId,
      users: [
        {
          userId: 0,
          food: []
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
  socket.on("join-session", (sessionId) => {
    console.log("New client joining", sessionId)

    const currentSession = getCurrentSession(sessionId)
    const userId = currentSession.users.length
    currentSession.users.push({
      userId,
      food: []
    })

    console.log(`Client ${userId} has joined the session`)
    socket.emit("session-joined", { userId })
  })

  /**
   * Called when the user clicks on food
   * Updates the user's food selection
   */
  socket.on("add-food", (food, sessionId, userId) => {
    console.log(`Adding foods ${food} for user ${userId} in session ${sessionId}`);
    const currentSession = getCurrentSession(sessionId)
    const currentUser = getCurrentUser(userId, currentSession)
    currentUser.food = [...food]
  })

  // TODO: Handle disconnections
  socket.on("disconnect", (userId, sessionId) => {
    // Remove user from session here
    console.log(`User ${userId} disconnected from session ${sessionId}`)
  });
});

http.listen(PORT, () => {
  console.log(`Fastfood server listening on port ${PORT} 🍕`);
});
