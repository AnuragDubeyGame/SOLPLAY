// Import required modules
const express = require('express');
const mongoose = require('mongoose');
const bs58 = require('bs58');
const web3 = require('@solana/web3.js');
const gameInfo = require('./gameInfo');
const userInfo = require('./userInfo');
const cors = require('cors');
const axios = require('axios');
const app = express();
const port = 5000;
app.use(cors());
app.use(express.json());


const connection = new web3.Connection("https://api.devnet.solana.com");
const mongoURL = 'mongodb+srv://factboyuniverse:Factboy123@factsdatabasecluster.ej0bjql.mongodb.net/SolPlayDB';
mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});





// ============================= API's ============================

//Get All Games
app.get("/api/getAllGames", async (req, res) => {
    try {
        const games = await gameInfo.find({});
        res.json(games);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Get a Single Game by ID
app.get("/api/getGame/:id", async (req, res) => {
    try {
        const gameId = req.params.id;

        // Use the Mongoose findById method to find the game by ID
        const game = await gameInfo.findById(gameId);

        if (!game) {
            return res.status(404).json({ error: 'Game not found' });
        }

        res.json(game);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Get Games by Category
app.get("/api/getGamesByCategory", async (req, res) => {
    try {
        const category = req.query.category;

        if (!category) {
            return res.status(400).json({ error: 'Category parameter is required' });
        }

        // Use the Mongoose find method to find games by category
        const games = await gameInfo.find({ category: category });

        if (games.length === 0) {
            return res.status(404).json({ error: 'No games found in the specified category' });
        }

        res.json(games);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

//Create New Game
app.post("/api/createNewGame", async (req, res) => {
    try {
        const {
            title,
            banner,
            description,
            category,
            developer,
            publisher,
            publicKey,
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
            publicKey,
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

// Transaction Generator - Send SOL
app.post("/api/sendSolana", async (req, res) => {
  try {
    const { senderPrivateKey, recipientPublicKey, amount } = req.body;
    console.log(req.body);

   // Create sender Keypair from private key
   const senderKeypair = web3.Keypair.fromSecretKey(new Uint8Array(bs58.decode(senderPrivateKey)));

    // Create a new transaction
    const transaction = new web3.Transaction().add(
      web3.SystemProgram.transfer({
        fromPubkey: senderKeypair.publicKey,
        toPubkey: recipientPublicKey,
        lamports: amount * web3.LAMPORTS_PER_SOL,
      })
    );

    console.log("Transaction Created")

    // Send and confirm the transaction
    const signature = await web3.sendAndConfirmTransaction(
      connection,
      transaction,
      [senderKeypair]
    );
    console.log("Transaction Initiated")
    // Check if the transaction was successful
    if (signature) {
      console.log( "Success" );
    } else {
      console.log( "Failed" );
    }
  } catch (error) {
    console.error("Error:", error);
    res.json({ status: "Failed", error: error.message });
  }
});

// SaveUserData
app.post("/api/saveUserData", async (req, res) => {
    try {
      const { username, publicKey, purchasedGames } = req.body;
  
      // Check if a user with the same public key already exists
      let existingUser = await userInfo.findOne({ publicKey });
  
      if (!existingUser) {
        // If the user does not exist, create a new user record
        existingUser = new userInfo({ username, publicKey, gamesPurchased: [] });
      }
  
      // Add the purchased games to the user's gamesPurchased array
      existingUser.gamesPurchased = [...existingUser.gamesPurchased, ...purchasedGames];
  
      // Save the updated user record
      await existingUser.save();
  
      res.status(201).json({ message: "User data saved successfully." });
    } catch (error) {
      console.error("Error:", error);
      res.status(500).json({ error: "Internal server error." });
    }
});
  
// Get My Games
app.post("/api/getMyGames", async (req, res) => {
    try {
      const { publicKey } = req.body;
  
      // Fetch user data based on the provided publicKey
      const user = await userInfo.findOne({ publicKey });
  
      if (!user) {
        res.status(404).json({ message: "User not found." });
        return;
      }
  
      // Fetch game information for each game ID in gamesPurchased
      const gamesInfo = await Promise.all(
        user.gamesPurchased.map(async (gameId) => {
          try {
            // Convert the gameId to a string if needed
            const gameIdString = String(gameId);
  
            // Replace with your actual API endpoint for fetching game data
            const gameResponse = await axios.get(`http://localhost:5000/api/getGame/${gameIdString}`);
  
            // Check if the response is valid (e.g., status 200) before returning
            if (gameResponse.status === 200) {
              return gameResponse.data;
            } else {
              console.error("Error fetching game data:", gameResponse.statusText);
              return null; // Handle error or missing data as needed
            }
          } catch (error) {
            console.error("Error fetching game data:", error);
            return null; // Handle error or missing data as needed
          }
        })
      );
  
      res.status(200).json({ user, gamesInfo });
    } catch (error) {
      console.error("Error:", error);
      res.status(500).json({ error: "Internal server error." });
    }
});

// ==================================================================

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
