const express = require('express');
var request = require('request');
const app = express();
const port = 3001;

app.get('/', (req, res) => {
    res.send('root')
});

app.get('/clean', (req, res) => {
    request(
        'https://eldenring.fanapis.com/api/ashes',
         function(error, response, body){
             if (!error && response.statusCode == 200){
                 res.send(body);
             }
        }
    );
 });

 app.get('/getashes', (req, res) => {
    request(
        'https://eldenring.fanapis.com/api/ashes',
         function(error, response, body){
             if (!error && response.statusCode == 200){
                 var parsedBody = JSON.parse(body);
                 var data = parsedBody ["data"];
                 res.send({data})
             }
        }
    );
 });

 //only affinities
 app.get('/getashesaffinity', (req, res) => {
    request(
        'https://eldenring.fanapis.com/api/ashes',
         function(error, response, body){
             if (!error && response.statusCode == 200){
                 var parsedBody = JSON.parse(body);
                 var affinity = [];
                 for(i = 0 ; i < parsedBody.data.length; i++){
                    affinity[i] = parsedBody.data[i].affinity;
                    console.log(i);
                 }
                //var affinity = parsedBody.data[0].affinity;
                res.send({affinity});
                 //var data = parsedBody ["data"];       
             }
        }
    );
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