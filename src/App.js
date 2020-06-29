import React, { useEffect } from 'react';
import { Container, Dimmer, Loader, Message, Sidebar, Segment } from "semantic-ui-react";
import { useSelector, useDispatch } from "react-redux";

import Calendar from "./components/Calendar";
import SidebarComponent from "./components/SidebarComponent";
import { eventsLoadStart } from "./store/actions/events"
import './App.css';

function App() {
  const events = useSelector(state => state.events);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(eventsLoadStart());
  }, [dispatch]);

  return (
    <Sidebar.Pushable as={Segment}>
      <SidebarComponent />

      <Sidebar.Pusher as={Container} className="application">
        {events.loadingState === "loading" &&
          <Dimmer active>
            <Loader>Loading</Loader>
          </Dimmer>}
        {events.loadingState === "failed" &&
          <Message negative>
            <Message.Header>Looks like, something went wrong</Message.Header>
            <p>{events.error}</p>
          </Message>}
        {events.loadingState === "succeed" && <Calendar />}
      </Sidebar.Pusher>
    </Sidebar.Pushable>

  );
}

export default App;
