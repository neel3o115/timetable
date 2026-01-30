function validateTeacherAvailability(professor, day, slot) {
  if (!professor.availability) return true;

  const availableSlots = professor.availability.get(day);
  if (!availableSlots) return false;

  return availableSlots.includes(slot);
}

module.exports = validateTeacherAvailability;
