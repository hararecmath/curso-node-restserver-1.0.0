require('dotenv').config();
const { application } = require('express');
const Server = require('./models/server');

const server = new Server();
server.listen();

// app.get('/generic', (req, res) => {
//     res.sendFile(path.join(__dirname, '/public/generic.html'));
// });