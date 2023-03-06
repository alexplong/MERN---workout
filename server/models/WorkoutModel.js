/** @format */

const mongoose = require("mongoose");

const Scheme = mongoose.Schema;

const workoutSchema = new Scheme(
  {
    title: {
      type: String,
      requred: true,
    },
    reps: {
      type: Number,
      required: true,
    },
    load: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Workout", workoutSchema);
