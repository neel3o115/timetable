const mongoose = require("mongoose");

const CellSchema = new mongoose.Schema({
  subject: String,
  type: String,
  professor: String
}, { _id: false });

const TimetableSchema = new mongoose.Schema({
  academicStructureId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "AcademicStructure"
  },

  day: String, // Monday
  slot: String, // "9:00-10:30"

  sections: {
    type: Map,
    of: CellSchema // A → {subject, type, professor}
  }
});

module.exports = mongoose.model("Timetable", TimetableSchema);
