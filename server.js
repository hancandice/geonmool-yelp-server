require("dotenv").config();
const express = require("express");
const morgan = require("morgan"); //morgan middleware
const app = express();

app.use(express.json()); //express middleware

//Get all Restaurants
app.get("/api/v1/restaurants", (req, res) => {
  console.log("route handler runs");
  res.status(200).json({
    status: "success",
    data: {
      restaurant: ["McDonalds", "Bapuri", "79Gukbap"],
    },
  });
});

//Get a individual Restaurant
app.get("/api/v1/restaurants/:id", (req, res) => {
  console.log(req.params);

  res.status(200).json({
    status: "success",
    data: {
      restaurant: ["McDonalds"],
    },
  });
});

//Create a Restaurant
app.post("/api/v1/restaurants", (req, res) => {
  console.log(req.body);
  res.status(201).json({
    status: "success",
    data: {
      restaurant: ["McDonalds"],
    },
  });
});

//Update Restaurants

app.put("/api/v1/restaurants/:id", (req, res) => {
  console.log(req.params.id);
  console.log(req.body);
  res.status(200).json({
    status: "success",
    data: {
      restaurant: ["McDonalds"],
    },
  });
});

//Delete Restaurant

app.delete("/api/v1/restaurants/:id", (req, res) => {
  res.status(204).json({
    status: "success",
  });
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`server is up and listing on port ${port}`);
});
