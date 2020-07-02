import React, { useState, Fragment } from 'react';
import { Table, Header } from "semantic-ui-react";
import { useSelector } from "react-redux";

import EventColumn from "./EventColumn";
import { timeRows, weekDays as days, months } from "../constants";
import { calculateWeek, filterEvents } from "../utils";

const timeSection = time => <Fragment key={time}>
  <Table.Row>
    <Table.Cell>{time}</Table.Cell>
    {[...Array(7)].map((_, index) => <Table.Cell key={index} />)}
  </Table.Row>
  <Table.Row>
    {[...Array(8)].map((_, index) => <Table.Cell key={index} />)}
  </Table.Row>
</Fragment>

function Calendar() {
  const [date, setDate] = useState(new Date(new Date().setHours(0, 0, 0, 0)));
  const events = useSelector(state => state.events.items);

  const weekDays = calculateWeek(date);

  return (
    <>
      {/*TODO: В заголовке отображается месяц и год выбраной даты. Сделать как положено */}
      <div className="calendar-wrapper">
        <Header as="h1" textAlign="center">Calendar</Header>
        <Header as="h2" textAlign="center">
          {`${date.toDateString().slice(4, 7)} ${weekDays[0].getDate()} 
        -  ${weekDays[6].getDate()}, ${date.getFullYear()}`}
        </Header>
        <div className="events-layer">
          {weekDays.map(date => <EventColumn key={date} date={date} events={filterEvents(date, events)} />)}
        </div>

        <Table definition celled className="calendar">
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell />
              {weekDays.map(weekDay => <Table.HeaderCell key={weekDay}>
                {`${days[weekDay.getDay()]}, ${months[weekDay.getMonth()]} ${weekDay.getDate()}`}
              </Table.HeaderCell>)}
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {timeRows.map(time => timeSection(time))}
          </Table.Body>
        </Table>
      </div>
    </>
  );
}

export default Calendar;