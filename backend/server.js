// Import required modules
const express = require('express');
const mongoose = require('mongoose');
const gameInfo = require('./gameInfo'); // Import the gameInfo model

const app = express();
const port = 5000;

const mongoURL = 'mongodb+srv://factboyuniverse:Factboy123@factsdatabasecluster.ej0bjql.mongodb.net/'; // Correct database name

mongoose.connect(mongoURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Middleware to parse JSON request bodies
app.use(express.json());

app.post("/api/createNewGame", async (req, res) => {
    try {
        const {
            title,
            banner,
            description,
            category,
            developer,
            publisher,
            releaseDate,
            price,
        } = req.body;
console.log('****fields****', req.body);

        if (!title || !banner || !description || !category || !developer || !publisher || !releaseDate || !price) {
            return res.status(400).json({ error: 'All fields are required' });
        }

        const samplegame = new gameInfo({
            title,
            banner,
            description,
            category,
            developer,
            publisher,
            releaseDate,
            price,
        });
        
        await samplegame.save();

        const result = await gameInfo.find({}); // Use the model directly
        res.json(result);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
