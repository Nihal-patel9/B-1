// step 1: Create a folder.
// step 2: npm init -y
// step 3: npm i express
// step 4: Create server.js file
// step 5: npm i mongoose


// Server Instantiate 
const express = require("express");
const app = express();
    

// Adding Middleware
app.use(express.json())


// activate the server on 3000 port 
app.listen(8060, () => {
    console.log("Server Started at port no. 8000");
});


// Routes
app.get('/', (req, res) => {
    res.send("Hello")
});

app.post('/cars', (req, res) => {
    res.send("Received a Post request");
})

app.post('/api/data', (req, res) => {
    const { name, brand } = req.body
    console.log(name);
    console.log(brand);
    res.send("Car Submitted successfully");
})

// Database Connection 
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/myDatabase', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => { console.log("Connection Successfully") })
    .catch((error) => { console.log("Recieved An Error", error) })




