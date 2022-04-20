const axios = require("axios").default;
const { response } = require("express");
const express = require("express");
var request = require("request");
const app = express();
const port = 3001;

app.get("/", (req, res) => {
  res.send("root");
});

app.get("/clean", (req, res) => {
  axios
    .get("https://eldenring.fanapis.com/api/ashes")
    .then(function (response) {
      //var data = response["data"]["data"];
      res.json(response.data.data);
    })
    .catch(function (error) {
      console.log(error);
    });
});

app.get("/getashes", (req, res) => {
  request(
    "https://eldenring.fanapis.com/api/ashes?limit=100",
    function (error, response, body) {
      //console.log(body);
      if (!error && response.statusCode == 200) {
        var parsedBody = JSON.parse(body);
        var data = parsedBody["data"];
        res.json(data);
      }
    }
  );
});

app.get("/getmain", (req, res) => {
  request(
    "https://eldenring.fanapis.com/api/classes?limit=10",
    function (error, response, body) {
      //console.log(body);
      if (!error && response.statusCode == 200) {
        var parsedBody = JSON.parse(body);
        var data = parsedBody["data"];
        res.json(data);
      }
    }
  );
});

//only affinities
app.get("/getashesaffinity", (req, res) => {
  request(
    "https://eldenring.fanapis.com/api/ashes",
    function (error, response, body) {
      if (!error && response.statusCode == 200) {
        var parsedBody = JSON.parse(body);
        var affinity = [];
        for (i = 0; i < parsedBody.data.length; i++) {
          affinity[i] = parsedBody.data[i].affinity;
          //console.log(i);
        }
        //var affinity = parsedBody.data[0].affinity;
        res.send({ affinity });
        //var data = parsedBody ["data"];
      }
    }
  );
});

app.get("/weapons", (req, res) => {
  axios
    .get("https://eldenring.fanapis.com/api/weapons?limit=100")
    .then(function (response) {
      //var data = response["data"]["data"];
      res.json(response.data.data);
    })
    .catch(function (error) {
      console.log(error);
    });
});

app.get("/shields", (req, res) => {
  axios
    .get("https://eldenring.fanapis.com/api/shields?limit=100")
    .then(function (response) {
      //var data = response["data"]["data"];
      res.json(response.data.data);
    })
    .catch(function (error) {
      console.log(error);
    });
});

// POST method route
app.post("/", (req, res) => {
  res.send("POST request to the homepage");
});

app.all("/secret", (req, res, next) => {
  console.log("Accessing the secret section ...");
  next(); // pass control to the next handler
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
