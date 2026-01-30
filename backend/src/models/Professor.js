const mongoose = require("mongoose");

const TeachingAssignmentSchema = new mongoose.Schema(
  {
    subject: {
      type: String,
      required: true
    },
    section: {
      type: String,
      required: true // "A", "B", etc.
    },
    type: {
      type: String,
      required: true // "lecture", "lab", "tutorial"
    }
  },
  { _id: false }
);

const ProfessorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },

  teaches: [TeachingAssignmentSchema],

  availability: {
    type: Map,
    of: [String] // day -> slots
  }
});

module.exports = mongoose.model("Professor", ProfessorSchema);

// {
//   "name": "Prof X",
//   "teaches": [
//     {
//       "subject": "Maths",
//       "section": "A",
//       "type": "lecture"
//     },
//     {
//       "subject": "Maths",
//       "section": "B",
//       "type": "lab"
//     },
//     {
//       "subject": "DSA",
//       "section": "C",
//       "type": "lecture"
//     }
//   ],
//   "availability": {
//     "Monday": ["9:00-10:30", "10:30-12:00"],
//     "Wednesday": ["12:00-1:30"]
//   }
// }
