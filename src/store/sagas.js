import { put, takeEvery, call } from 'redux-saga/effects'
import { fakeData } from "../constants";
import { EVENTS_LOADING, eventsLoadSucceed, ADD_EVENT, addEventSucceed } from "./actions/events";

const fakeFetch = (ms, data) => new Promise(res => setTimeout(() => res(data), ms))

function* workerEventsLoadStart() {
  const data = yield call(() => fakeFetch(500, fakeData));

  yield put(eventsLoadSucceed(data));
}

export function* watchEventsLoadStart() {
  yield takeEvery(EVENTS_LOADING, workerEventsLoadStart);
}



function* workerAddEvent({ payload }) {
  const data = yield call(() => fakeFetch(500, payload));

  yield put(addEventSucceed(data));
}

export function* watchAddEvent() {
  yield takeEvery(ADD_EVENT, workerAddEvent);
}

