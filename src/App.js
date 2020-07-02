import React, { useEffect } from 'react';
import { Container, Dimmer, Loader, Message, Header } from "semantic-ui-react";
import { useSelector, useDispatch } from "react-redux";

import Calendar from "./components/Calendar";
import Sidebar from "./components/Sidebar";
import { eventsLoadStart } from "./store/actions/events"
import './App.scss';

function App() {
  const events = useSelector(state => state.events);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(eventsLoadStart());
  }, [dispatch]);

  return (
    <>
      {events.loadingState === "loading" &&
        <Dimmer active>
          <Loader>Loading</Loader>
        </Dimmer>}

      {events.loadingState === "failed" &&
        <Message negative>
          <Message.Header>Looks like, something went wrong</Message.Header>
          <p>{events.error}</p>
        </Message>}

      {events.loadingState === "succeed" && <>
        <Container as="main" className="application">
          <Header as="h1" textAlign="center">Calendar</Header>
          <Calendar />
        </Container>
        <Sidebar />
      </>}
    </>

  );
}

export default App;
