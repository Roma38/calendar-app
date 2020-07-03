import React, { useState, Fragment } from 'react';
import { Table, Header, Button, Input } from "semantic-ui-react";
import { useSelector } from "react-redux";

import EventColumn from "./EventColumn";
import { timeRows, weekDays as days, months } from "../constants";
import { calculateWeek, filterEvents, inputValuesToDate, dateToYYYYmmDD, generateHeaderContent } from "../utils";

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
      <div className="calendar-wrapper">
        <Header as="h1" textAlign="center">Calendar</Header>
        <Header as="h2" textAlign="center" content={generateHeaderContent(weekDays)} />

        <div className="calendar-navigation">
          <Button circular icon='arrow left' onClick={() => setDate(new Date(date.setDate(date.getDate() - 7)))} />
          <Input
            type="date"
            value={dateToYYYYmmDD(date)}
            onChange={(e, { value }) => value ? setDate(inputValuesToDate(value)) : null} />
          <Button circular icon='arrow right' onClick={() => setDate(new Date(date.setDate(date.getDate() + 7)))} />
        </div>

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