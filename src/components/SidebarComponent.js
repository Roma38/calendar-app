import React from 'react';
import { Sidebar, Segment, List, Header, Button } from "semantic-ui-react";


function SidebarComponent() {
  return (
      <Sidebar
        as={Segment}
        animation='overlay'
        direction="right"
        inverted
        onHide={() => { }}
        // vertical
        visible={true}
      // width='thin'
      >
        <Header as="h2" inverted>Legend</Header>

        <List inverted>
          <List.Item >
            <List.Icon name='circle' />
            <List.Content>Свободное время</List.Content>
          </List.Item>
          <List.Item>
            <List.Icon name='circle' color="teal" />
            <List.Content>Выделено для текущей организации</List.Content>
          </List.Item>
          <List.Item>
            <List.Icon name='circle' color="green" />
            <List.Content>Выделено для другой организации</List.Content>
          </List.Item>
          <List.Item>
            <List.Icon name='circle' color="blue" />
            <List.Content>Выделено вами</List.Content>
          </List.Item>
          <List.Item>
            <List.Icon name='circle' color="violet" />
            <List.Content>Выделено менеджером</List.Content>
          </List.Item>
          <List.Item>
            <List.Icon name='circle' color="yellow" />
            <List.Content>Нерабочее время (перерыв)</List.Content>
          </List.Item>
        </List>

        <Button primary>+ Add new event</Button>
      </Sidebar>

  );
}

export default SidebarComponent;
