// Import the required Express.js framework to create the server.
const express = require('express');
const app = express();
// The port is set to the environment variable provided by the hosting service,
// or defaults to 3000 for local development.
const port = process.env.PORT || 3000;

// The Sonolus demo will have more advanced routing, but this is the basic structure.
// This route responds to a GET request to the root URL ("/").
app.get('/', (req, res) => {
    // Send a simple text response to confirm the server is running.
    res.send('Your Sonolus Express server is up and running!');
});

// The server starts listening for incoming requests on the specified port.
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
