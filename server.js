const express = require("express");
const path = require("path");
const app = express();
const port = 8080;

app.set("port", process.env.PORT || port);

app.use(express.static(path.join(__dirname, "build")));

app.listen(app.get("port"), function() {
  console.log("Node app is running on port", app.get("port"));
});

app.get("/", function(request, response) {
  // TODO: if the request is just /, serve the homepage
  // if it's /<something>, call redirect
  response.sendFile(path.join(__dirname, "/build/index.html"));
});

app.get("/*", function(request, response) {
  response.send("redirect");
});

app.get("/encode/*", function(request, response) {
  // TODO: forward this request to /e/
  response.send("encode");
});
