const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const notesSchema = new Schema({
  course: { type: String, required: true },
  user: { type: String, required: true },
  note: { type: String, required: true },
  timestamp: { type: String, required: true },//needs to be a int for time
});

const Notes = mongoose.model("Notes", notesSchema);

module.exports = Notes;