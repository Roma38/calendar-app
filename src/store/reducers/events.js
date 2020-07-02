import {
  EVENTS_LOADING,
  EVENTS_LOAD_SUCCEED,
  EVENTS_LOAD_FAILED,
  ADD_EVENT_SUCCEED
} from "../actions/events";

const initialState = {
  loadingState: "",
  error: null,
  items: []
};

export const eventsReduser = (state = initialState, { type, payload }) => {
  switch (type) {
    case EVENTS_LOADING:
      return { ...state, loadingState: "loading", error: null };
    case EVENTS_LOAD_SUCCEED:
      return { ...state, loadingState: "succeed", items: payload, error: null };
    case EVENTS_LOAD_FAILED:
      return {
        ...state,
        loadingState: "failed",
        error: payload,
        items: []
      };
    case ADD_EVENT_SUCCEED:
      return {
        ...state,
        loadingState: "succeed",
        error: null,
        items: [...state.items, payload],
      };

    default:
      return state;
  }
};
