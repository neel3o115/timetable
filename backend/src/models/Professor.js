const mongoose = require("mongoose");

const ProfessorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },

  teaches: [
    {
      subject: String,
      type: {
        type: String, // lecture | lab | workshop
        enum: ["lecture", "lab", "workshop"]
      },
      sections: [String] // ["A", "B"]
    }
  ],

  availability: {
    type: Map,
    of: [String] // slots e.g. "9:00-10:30"
  }
});

module.exports = mongoose.model("Professor", ProfessorSchema);

// {
//   "Monday": ["9:00-10:30", "10:30-12:00"],
//   "Tuesday": ["12:00-1:30"]
// }
