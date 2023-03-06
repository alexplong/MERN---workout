/** @format */
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const workoutRoutes = require("./routes/workouts");

// express app
const app = express();

// middleware
app.use(express.json()); // any request comes in, middleware looks for body to request. if has, it passes it to req object
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.use("/api/workouts", workoutRoutes);

// connect do db async
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    // once connected to db -> listen for requests
    app.listen(process.env.PORT, () => {
      console.log(
        `Connection to db successful & Listening on port ${process.env.PORT}`
      );
    });
  })
  .catch((err) => {
    console.log(err);
  });
