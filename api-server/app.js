const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const categoriesWithItems = require("./data/categoriesWithItems.json");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

const port = process.env.PORT || 8080;

app.get("/categories", (req, res) => {
  console.log("API called");
  console.log("categoriesWithItem", categoriesWithItems);
  return res.status(200).json(categoriesWithItems);
});

app.listen(port, () =>
  console.log(`Geek Square mocked API running on port ${port}!`)
);
