require("dotenv").config();

const express = require("express");

const app = express();

app.get("/getRestaurants", (req, res) => {
  res.status(404).json({
    status: "success",
    restaurant: "McDonalds",
  });
});
//http://localhost:3006/getRestaurants
//To Change the status code: res.status(status_code_number)

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`server is up and listing on port ${port}`);
});
