const validateTeacherClash = require("./validateTeacherClash");
const validateTeacherAvailability = require("./validateTeacherAvailability");
const validateRooms = require("./validateRooms");
const validateSubjectPerDay = require("./validateSubjectPerDay");

function validatePlacement({
  timetable,
  day,
  slot,
  section,
  block,
  professorObj,
  roomConfig
}) {
  const { subject, type, professor } = block;

  if (!validateTeacherClash(timetable, day, slot, professor)) {
    return { valid: false, reason: "Teacher clash" };
  }

  if (!validateTeacherAvailability(professorObj, day, slot)) {
    return { valid: false, reason: "Teacher unavailable" };
  }

  if (!validateRooms(timetable, day, slot, type, roomConfig)) {
    return { valid: false, reason: "No room available" };
  }

  if (!validateSubjectPerDay(timetable, day, section, subject)) {
    return { valid: false, reason: "Same subject already scheduled today" };
  }

  return { valid: true };
}

module.exports = validatePlacement;
