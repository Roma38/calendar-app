export const EVENTS_LOADING = "EVENTS_LOADING";
export const EVENTS_LOAD_SUCCEED = "EVENTS_LOAD_SUCCEED";
export const EVENTS_LOAD_FAILED = "EVENTS_LOAD_FAILED";
export const ADD_EVENT = "ADD_EVENT";
export const ADD_EVENT_SUCCEED = "ADD_EVENT_SUCCEED"

export const eventsLoadStart = () => ({ type: EVENTS_LOADING });

export const eventsLoadSucceed = payload => ({
  type: EVENTS_LOAD_SUCCEED,
  payload
});

export const eventsLoadFailed = error => ({
  type: EVENTS_LOAD_FAILED,
  payload: error
});

export const addEvent = payload => ({
  type: ADD_EVENT,
  payload
});

export const addEventSucceed = payload => ({
  type: ADD_EVENT_SUCCEED,
  payload
});



