const bodyParser = require('body-parser');
const express = require('express'); 
const app = express(); 
const cors = require('cors');
const mongoose = require('mongoose');
const io = require('socket.io')();
const makeid = require('./utils.js')
// Added this line to try and overcome terminal error
app.use(
    express.urlencoded({ extended: true })
);
app.use(express.json());
app.use(bodyParser.json());
app.use(cors('*'));
const userRoute = require('./routes/userRoute')
// Connect to DB
mongoose.connect(
    "mongodb+srv://project3:project3@cluster0.wnuva.mongodb.net/firstdatabase?retryWrites=true&w=majority",
    { useNewUrlParser: true },
    () => console.log('connected to db!')
);
app.use('/users', userRoute);
app.get("/", (req, res) => {
    res.send("Hello")
})
const clientRooms = {};
io.on('connection', client => {
    client.on('newGame', handleNewGame);
    client.on('joinGame', handleJoinGame);
    function handleNewGame() {
        let roomName = makeid(5);
        clientRooms[client.id] = roomName;
        client.emit('gameCode', roomName);
        state[roomName] = initGame();
        client.join(roomName);
        client.number = 1;
        client.emit('init', 1);
    }
  function handleJoinGame(roomName) {
    const room = io.sockets.adapter.rooms[roomName];
    let allUsers;
    if (room) {
      allUsers = room.sockets;
    }
    let numClients = 0;
    if (allUsers) {
      numClients = Object.keys(allUsers).length;
    }
    if (numClients === 0) {
      client.emit('unknownCode');
      return;
    } else if (numClients > 4) {
      client.emit('tooManyPlayers');
      return;
    }
    clientRooms[client.id] = roomName;
    client.join(roomName);
    client.number = 2;
    client.emit('init', 2);
    
    startGameInterval(roomName);
  }
})
const port = process.env.PORT || 8000;
if (process.env.NODE_ENV !== 'test') {
    app.listen(port, () => console.log('server up and running'));
}
module.exports = app;