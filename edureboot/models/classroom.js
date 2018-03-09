const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const classroomSchema = new Schema({
  name: { type: String, required: true },
  teacher: { type: String, required: true },
  schedule: { type: String, required: true },
  location: { type: String, required: true },
  classID: { type: String, required: true },
});

const Classroom = mongoose.model("Classroom", classroomSchema);

module.exports = Classroom;