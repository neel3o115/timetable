function validateSubjectPerDay(timetable, day, section, subject) {
  const dayData = timetable[day];
  if (!dayData) return true;

  for (const slot of Object.keys(dayData)) {
    const cell = dayData[slot]?.[section];
    if (cell && cell.subject === subject) {
      return false;
    }
  }
  return true;
}

module.exports = validateSubjectPerDay;
