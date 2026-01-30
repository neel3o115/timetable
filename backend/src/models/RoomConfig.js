const mongoose = require("mongoose");

const RoomConfigSchema = new mongoose.Schema({
  lectureRooms: {
    type: Number,
    required: true
  },
  labRooms: {
    type: Number,
    required: true
  },
  workshopRooms: {
    type: Number,
    default: 0
  }
});

module.exports = mongoose.model("RoomConfig", RoomConfigSchema);
