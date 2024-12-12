const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json(
    {
        type: 'application/*+json'
    }
));

app.get('/', (req, res) => {
    res.send("express sample app");
})

app.get('/sample', (req, res) => {
    res.send("express new app");
})


// write your api's here

// ex:

// app.post('/users', (req, res) => {
//     // your operations
// })


app.listen(5100, () => {
    console.log(`app listing http://127.0.0.1:5100`);
})