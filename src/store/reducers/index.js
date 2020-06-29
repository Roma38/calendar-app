import { combineReducers } from "redux";
import { eventsReduser as events } from "./events";

const rootReduser = combineReducers({
  events
});

export default rootReduser;
