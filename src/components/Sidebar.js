import React, { useState } from 'react';
import { List, Header, Button, Modal } from "semantic-ui-react";

import AddEventForm from "./AddEventForm";
import { eventTypes } from "../constants";

function Sidebar() {
  const [isModalOpened, setIsModalOpened] = useState(false);

  return (
    <aside className="sidebar">
      <Header as="h2" inverted>Legend</Header>

      <List inverted>
        <List.Item >
          <List.Icon name='circle' />
          <List.Content>Свободное время</List.Content>
        </List.Item>
        {eventTypes.map(({ color, value }) => <List.Item key={color}>
          <List.Icon name='circle' color={color} />
          <List.Content>{value}</List.Content>
        </List.Item>)}
      </List>

      <Button onClick={() => setIsModalOpened(true)} primary>+ Add new event</Button>
      <Modal open={isModalOpened} onClose={() => setIsModalOpened(false)} size="tiny" >
        <Header icon='plus' content='Add new event' />
        <Modal.Content>
          <AddEventForm closeHandler={() => setIsModalOpened(false)} />
        </Modal.Content>
      </Modal>
    </aside>
  );
}

export default Sidebar;
