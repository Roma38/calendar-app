import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";

import { eventsLoadStart } from "./store/actions/events"
import './App.css';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(eventsLoadStart());
  }, [eventsLoadStart, dispatch]);

  return (
    <div className="App">

    </div>
  );
}

export default App;
