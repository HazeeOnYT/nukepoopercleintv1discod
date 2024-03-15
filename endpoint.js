const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

// Endpoint for receiving messages from Discord
app.post('/webhook', (req, res) => {
    // Handle incoming message data here
    console.log('Received message from Discord:', req.body);
    res.status(200).send('Message received successfully');
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
