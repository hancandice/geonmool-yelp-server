require("dotenv").config();
const express = require("express");
const cors = require("cors");
const db = require("./db");
const morgan = require("morgan"); //morgan middleware
const app = express();

app.use(cors());
app.use(express.json()); //express middleware

//Get all Restaurants
app.get("/api/v1/restaurants", async (req, res) => {
  try {
    const results = await db.query("select * from restaurants");

    res.status(200).json({
      status: "success",
      results: results.rows.length,
      data: {
        restaurants: results.rows,
      },
    });
  } catch (err) {
    console.log(err);
  }
});

//Get a individual Restaurant
app.get("/api/v1/restaurants/:id", async (req, res) => {
  try {
    const results = await db.query("select * from restaurants where id = $1", [
      req.params.id,
    ]);

    res.status(200).json({
      status: "success",
      data: {
        restaurant: results.rows[0],
      },
    });
  } catch (err) {
    console.log(err);
  }
});

//Create a Restaurant
app.post("/api/v1/restaurants", async (req, res) => {
  // console.log(req.body); // thanks to express middleware

  try {
    const results = await db.query(
      "INSERT INTO restaurants (name, location, price_range, menu) values ($1, $2, $3, $4) returning *",
      [
        req.body.name,
        req.body.location,
        parseInt(req.body.price_range),
        req.body.menu,
      ]
    );

    res.status(201).json({
      status: "success",
      data: {
        restaurant: results.rows[0],
      },
    });
  } catch (err) {
    console.log(err);
  }
});

//Update Restaurants

app.put("/api/v1/restaurants/:id", async (req, res) => {
  try {
    const results = await db.query(
      "UPDATE restaurants SET name = $1, location = $2, price_range = $3, menu=$4 where id = $5 returning *",
      [
        req.body.name,
        req.body.location,
        parseInt(req.body.price_range),
        req.body.menu,
        req.params.id,
      ]
    );
    res.status(200).json({
      status: "success",
      data: {
        restaurant: results.rows[0],
      },
    });
  } catch (err) {
    console.log(err);
  }
});

//Delete Restaurant

app.delete("/api/v1/restaurants/:id", async (req, res) => {
  try {
    const results = await db.query("DELETE FROM restaurants where id = $1", [
      req.params.id,
    ]);
    res.status(204).json({
      status: "success",
    });
  } catch (err) {
    console.log(err);
  }
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`server is up and listing on port ${port}`);
});
