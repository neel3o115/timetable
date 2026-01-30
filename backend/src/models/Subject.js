const mongoose = require("mongoose");

const SubjectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  sessions: {
    lecture: { type: Number, default: 0 },
    lab: { type: Number, default: 0 },
    workshop: { type: Number, default: 0 }
  }
});

module.exports = mongoose.model("Subject", SubjectSchema);
