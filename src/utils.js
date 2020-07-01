
export function calculateWeek(date) {
  const currentWeekDay = date.getDay();
  const currentWeek = [];
  for (let i = 0; i < 7; i++) {
    currentWeek.push(new Date(date.valueOf() + (i - currentWeekDay) * 24 * 60 * 60 * 1000));
  }
  return currentWeek;
};

export function filterEvents(date, events) {
  const filterDate = new Date(date);
  return events.filter(({ start, end }) => {
    const startDate = new Date(start);
    const endDate = new Date(end);
    return startDate.toDateString() === filterDate.toDateString() 
      || endDate.toDateString() === filterDate.toDateString()
      || (date > startDate.getTime() && date < endDate.getTime())
  })
}

