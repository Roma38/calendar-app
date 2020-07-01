import { rowHeight, timeRows, workingHours } from "./constants";

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
};

export function disposeEvent({ start, end }, date) {
  const eventStart = new Date(start);
  const eventEnd = new Date(end);
  const workStart = new Date(date.setHours(workingHours.start));
  const workEnd = new Date(date.setHours(workingHours.end));

  const top = workStart > eventStart ? 0 : (100 * (eventStart - workStart) / (workEnd - workStart)) + "%";
  const height = (((eventEnd < workEnd ? eventEnd : workEnd) - (eventStart > workStart ? eventStart : workStart)) * 100 / (workEnd - workStart)) + "%";
  // debugger;
  return { top, height };
}

export function convertToTime(date) {
  const splitedTime = new Date(date).toTimeString().split(":");

  return `${splitedTime[0]}:${splitedTime[1]}`
}



