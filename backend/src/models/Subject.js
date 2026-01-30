const mongoose = require("mongoose");

const SessionRequirementSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      required: true // "lecture", "lab", "tutorial", etc.
    },
    count: {
      type: Number,
      required: true
    }
  },
  { _id: false }
);

const SubjectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  sessions: [SessionRequirementSchema]
});

module.exports = mongoose.model("Subject", SubjectSchema);

// {
//   "name": "Maths",
//   "sessions": [
//     { "type": "lecture", "count": 2 },
//     { "type": "lab", "count": 2 },
//     { "type": "tutorial", "count": 1 }
//   ]
// }
