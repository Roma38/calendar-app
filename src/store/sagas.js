import { put, takeEvery, call } from 'redux-saga/effects'
import { fakeData } from "../constants";
import { EVENTS_LOADING, eventsLoadSucceed } from "./actions/events";

export function* helloSaga() {
  console.log('Hello Sagas!')
}

const fakeFetch = (ms, data) => new Promise(res => setTimeout(() => res(data), ms))

function* workerEventsLoadStart() {
  const data = yield call(() => fakeFetch(500, fakeData));

  yield put(eventsLoadSucceed(data));
}

export function* watchEventsLoadStart() {
  yield takeEvery(EVENTS_LOADING, workerEventsLoadStart);
}

