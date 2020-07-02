import React, { useState } from "react";
import { Form, Button, Label, Message } from "semantic-ui-react";
import { useDispatch, useSelector } from "react-redux";

import { eventTypes } from "../constants";
import { checkValidity, inputValuesToDate, generateID } from "../utils";
import { addEvent } from "../store/actions/events";

const selectOptions = eventTypes.map(({ value }, index) => ({ key: value, value: index, text: value }))

function AddEventForm({ closeHandler }) {
  const [event, setEvent] = useState({ startDate: "", startTime: "", endDate: "", endTime: "", comment: "", type: 0 });
  const [errors, setErrors] = useState([]);
  const dispatch = useDispatch();
  const events = useSelector(state => state.events.items);

  const submitHandler = e => {
    e.preventDefault();
    const validationErrors = checkValidity(event, events);

    if (validationErrors.length) {
      setErrors(validationErrors);
    } else {
      const start = inputValuesToDate(event.startDate, event.startTime);
      const end = inputValuesToDate(event.endDate, event.endTime);
      const id = generateID();

      dispatch(addEvent({ id, start, end, comment: event.comment, type: event.type }));
      closeHandler();
    }

  };

  return (
    <Form className="" onSubmit={submitHandler}>
      <Form.Group widths='equal'>
        <Label>Start:
          <Form.Input
            type="date"
            value={event.startDate}
            onChange={(e, { value }) => setEvent({ ...event, startDate: value })}
            required
          />
          <Form.Input
            type="time"
            value={event.startTime}
            onChange={(e, { value }) => setEvent({ ...event, startTime: value })}
            required
          />
        </Label>

        <Label>End:
        <Form.Input
            type="date"
            value={event.endDate}
            onChange={(e, { value }) => setEvent({ ...event, endDate: value })}
            required
          />
          <Form.Input
            type="time"
            value={event.endTime}
            onChange={(e, { value }) => setEvent({ ...event, endTime: value })}
            required
          />
        </Label>
      </Form.Group>

      <Form.TextArea
        label="Comment:"
        value={event.comment}
        onChange={(e, { value }) => setEvent({ ...event, comment: value })}
      />
      <Form.Select
        label="Type:"
        placeholder="Pick the type"
        value={event.type}
        onChange={(e, { value }) => setEvent({ ...event, type: +value })}
        required
        options={selectOptions}
      />

      {Boolean(errors.length) && <Message negative list={errors} />}

      <Button type="submit" positive>Add</Button>
      <Button onClick={closeHandler} negative>Cancel</Button>
    </Form>
  );
}
export default AddEventForm;
