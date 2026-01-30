function validateTeacherClash(timetable, day, slot, professor) {
  const slotData = timetable[day]?.[slot];
  if (!slotData) return true;

  for (const section of Object.keys(slotData)) {
    const cell = slotData[section];
    if (cell && cell.professor === professor) {
      return false;
    }
  }
  return true;
}

module.exports = validateTeacherClash;