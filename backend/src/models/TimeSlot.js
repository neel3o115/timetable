const mongoose = require("mongoose");

const TimeSlotSchema = new mongoose.Schema({
  label: String, // "Slot 1"
  start: String, // "9:00"
  end: String    // "10:30"
});

module.exports = mongoose.model("TimeSlot", TimeSlotSchema);
