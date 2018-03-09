const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const assignmentsSchema = new Schema({
    course: { type: String, required: true },
    assignments: {
        information: String,
        content: {
            question: String,
            answers: [{
                type: String
            }]
        }
    }
  });

  const Assignments = mongoose.model("Assignments", assignmentsSchema);

  module.exports = Assignments;