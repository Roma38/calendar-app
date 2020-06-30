import React, { useState, Fragment } from 'react';
import { Table, Header } from "semantic-ui-react";

import EventColumn from "./EventColumn";
import { weekDays, timeRows } from "../constants";
import { calculateWeek } from "../utils";

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
  const [date, setDate] = useState(new Date());
  const weekDays = calculateWeek(date);

  return (
    <>
      <Header as="h2" textAlign="center">
        {`${date.toDateString().slice(4, 7)} ${new Date(weekDays[0]).getDate()} 
        -  ${new Date(weekDays[6]).getDate()}, ${date.getFullYear()}`}
      </Header>

      <div className="calendar-wrapper">
        <div className="events-layer">
          {[...Array(7)].map((_, index) => <EventColumn key={index} />)}
        </div>

        <Table definition celled className="calendar">
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell />
              {weekDays.map(weekDay => <Table.HeaderCell key={weekDay}>
                {new Date(weekDay).toDateString().slice(0, 10)}
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