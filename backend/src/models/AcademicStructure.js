const mongoose = require("mongoose");

const AcademicStructureSchema = new mongoose.Schema({
  academicYear: {
    type: String,
    required: true // e.g. "2025-26"
  },
  yearOfStudy: {
    type: Number,
    required: true // 2 for 2nd year
  },
  branch: {
    type: String,
    required: true // CSE, IT, etc.
  },
  sections: [String], // ["A", "B", "C", "D"]
});

module.exports = mongoose.model(
  "AcademicStructure",
  AcademicStructureSchema
);