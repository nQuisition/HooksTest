const express = require("express");

const app = express();
const port = process.env.PORT || 8010;

app.set("trust proxy", "127.0.0.1");

app.get("/", (req, res) => {
  res.status(200).send("Hooks test!!!");
});

app.listen(port, () => {
  console.log(`Hooks app listening on port ${port}!`);
});
