require("dotenv").config();

const express = require("express");

const app = express();

// Get all Restaurants
app.get("/api/vi/restaurants", (req, res) => {
  res.status(200).json({
    status: "success",
    data: {
      restaurant: ["McDonalds", "Wendys"],
    },
  });
});
//http://localhost:3006/getRestaurants
//To Change the status code: res.status(status_code_number)

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`server is up and listing on port ${port}`);
});
