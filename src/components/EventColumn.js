import React from 'react';
import { Label } from "semantic-ui-react";

import { eventTypes, workingHours } from "../constants"
import { disposeEvent, convertToTime } from "../utils";

function EventColumn({ date, events }) {
//TODO: по клику на событие, показывать модалку с комментарием и временем
  return (
    <div className="events-layer__col">
      {events.map(event => <Label
        key={event.id}
        className="event-block"
        style={disposeEvent(event, date)}
        color={eventTypes[event.type].color}
        title={event.comment}
      >
        <p>
          {date.setHours(workingHours.start) < new Date(event.start) ? convertToTime(event.start) : workingHours.start + ":00"} - 
          {date.setHours(workingHours.end) > new Date(event.end) ? convertToTime(event.end) : workingHours.end + ":00"}
        </p>
        <p>{event.comment}</p>
      </Label>)}
    </div>
  );
}

export default EventColumn;