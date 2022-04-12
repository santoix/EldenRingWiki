const express = require('express')
const app = express()
const port = 3001;

app.get('/', (req, res) => {
    res.send('root')
});

app.get('/main', (req, res) => {
    res.send('main')
});

// POST method route
app.post('/', (req, res) => {
    res.send('POST request to the homepage')
});

app.all('/secret', (req, res, next) => {
    console.log('Accessing the secret section ...')
    next() // pass control to the next handler
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});