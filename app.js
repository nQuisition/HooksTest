const express = require("express");

const app = express();
app.set("trust proxy", "127.0.0.1");

app.get("/", (req, res) => {
  res.status(200).send("Hooks test!!!");
});

app.listen(8010, () => {
  console.log("Deployer app listening on port 8010!");
});
