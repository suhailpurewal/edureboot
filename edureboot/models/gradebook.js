const mongoose = require("mongoose");
const Schema = mongoose.Schema;


var gradebookSchema = new Schema({
    course: String,
    users:
    {
        user: String,
        assignments: {
            assignment: String,
            assscore:  {
                score: String,
            }
        },
    },
  });

  const Gradebook = mongoose.model("Gradebook", gradebookSchema);

  module.exports = Gradebook;