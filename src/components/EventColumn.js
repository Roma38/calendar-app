import React, { useState, Fragment } from 'react';
import { Label } from "semantic-ui-react";

import { eventTypes } from "../constants"
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
        <p>{convertToTime(event.start)} - {convertToTime(event.end)}</p>
        <p>{event.comment}</p>
      </Label>)}
    </div>
  );
}

export default EventColumn;