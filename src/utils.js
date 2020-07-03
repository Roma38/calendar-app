import { workingHours, fakeData, months } from "./constants";

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

  return { top, height };
}

export function convertToTime(date) {
  const splitedTime = new Date(date).toTimeString().split(":");

  return `${splitedTime[0]}:${splitedTime[1]}`
}

export function inputValuesToDate(dateString, timeString = "0") {
  const dateParts = dateString.split('-');
  const timeParts = timeString.split(':');
  dateParts[1] -= 1;

  return dateParts ? new Date(...dateParts, ...timeParts) : null;
}

export function dateToYYYYmmDD(date) {
  const mm = date.getMonth() + 1;
  const dd = date.getDate();

  return [date.getFullYear(), (mm > 9 ? '' : '0') + mm, (dd > 9 ? '' : '0') + dd].join('-');
};

export function checkValidity({ startDate, startTime, endDate, endTime }, events) {
  const errors = [];
  const existingEvents = events.map(({ start, end }) => ({ start: new Date(start), end: new Date(end) }));
  const newEventStart = inputValuesToDate(startDate, startTime);
  const newEventEnd = inputValuesToDate(endDate, endTime);

  if (existingEvents.find(event => (
    (newEventStart > event.start && newEventStart < event.end) ||
    (newEventEnd > event.start && newEventEnd < event.end) ||
    (event.start > newEventStart && event.start < newEventEnd && event.end > newEventStart && event.end < newEventEnd)
  ))) {
    errors.push("New event shouldn't cross with existing");
  }

  if (newEventStart >= newEventEnd) {
    errors.push("Event can't start before it's over");
  }

  return errors;
}

export function generateID() {
  return fakeData.reduce((newID, { id }) => newID < id ? id++ : newID, 0)
}

export function generateHeaderContent(displayedWeek) {
  if (displayedWeek[0].getFullYear() !== displayedWeek[6].getFullYear()) {
    return `${displayedWeek[0].getDate()} ${months[displayedWeek[0].getMonth()]} ${displayedWeek[0].getFullYear()} - 
      ${displayedWeek[6].getDate()} ${months[displayedWeek[6].getMonth()]} ${displayedWeek[6].getFullYear()}`
  } else if (displayedWeek[0].getMonth() !== displayedWeek[6].getMonth()) {
    return `${displayedWeek[0].getDate()} ${months[displayedWeek[0].getMonth()]} - 
      ${displayedWeek[6].getDate()} ${months[displayedWeek[6].getMonth()]} ${displayedWeek[6].getFullYear()}`
  } else {
    return `${displayedWeek[0].getDate()} - ${displayedWeek[6].getDate()} 
      ${months[displayedWeek[6].getMonth()]} ${displayedWeek[6].getFullYear()}`
  }
}
