
export function calculateWeek(date) {
  const currentWeekDay = date.getDay();
  const currentWeek = [];
  for (let i = 0; i < 7; i++) {
    currentWeek.push(new Date().setDate(date.getDate() - currentWeekDay + i ));
  }
  return currentWeek;
} 