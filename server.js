const axios = require("axios");
const express = require("express");
const path = require("path");
const app = express();
const port = 8080;

const serviceHost = "http://wittle-wink.herokuapp.com";
const redirectEndpoint = serviceHost + "/r";
const encodeEndpoint = serviceHost + "/e";

app.set("port", process.env.PORT || port);

app.use(express.static(path.join(__dirname, "build")));

app.listen(app.get("port"), function() {
  console.log("Node app is running on port", app.get("port"));
});

app.get("/", function(request, response) {
  // Serve the homepage on root requests.
  response.sendFile(path.join(__dirname, "/build/index.html"));
});

app.get("/:shortLink", function(request, response) {
  // Redirect /<shortLink> requests to the url shortening service.
  response.redirect(redirectEndpoint + request.url);
});

app.get("/encode/*", function(request, response) {
  // Proxy /encode/<someURL> to the url shortening service.
  var requestUrl = encodeEndpoint + request.url.substring("/encode".length);

  axios
    .get(requestUrl)
    .then(function(res) {
      response.send(res.data);
    })
    .catch(function() {
      response.sendStatus(500);
    });
});

app.get("/decode/:shortLink", function(request, response) {
  // TODO: route to /d/
});
