function validateRooms(timetable, day, slot, type, roomConfig) {
  const slotData = timetable[day]?.[slot];
  if (!slotData) return true;

  let count = 0;

  for (const section of Object.keys(slotData)) {
    const cell = slotData[section];
    if (cell && cell.type === type) {
      count++;
    }
  }

  if (type === "lab" && count >= roomConfig.labRooms) return false;
  if (type === "lecture" && count >= roomConfig.lectureRooms) return false;
  if (type === "workshop" && count >= roomConfig.workshopRooms) return false;

  return true;
}

module.exports = validateRooms;
