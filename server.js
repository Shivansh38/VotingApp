const express = require('express'); // Import the Express framework
const app = express(); 

const bodyParser = require('body-parser');

// require('dotenv').config();



app.use(bodyParser.json());  // middleware

const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=> {
    console.log('listening to PORT 3000');
})