const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const test = new Schema({

  day: {
    type: Date,
    default: () => new Date(),
  },

  exercises: [{
      type: {type: String},
      name: {type: String},
      duration: {type: Number},
      weight: {type: Number},
      reps: {type: Number},
      sets: {type: Number}
  }]

});

const workouts = mongoose.model("Workouts", test);

module.exports = workouts;