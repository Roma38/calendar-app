import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from 'redux-saga';

import rootReducer from "./reducers/index";
import { helloSaga, watchEventsLoadStart } from './sagas'

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(helloSaga);
sagaMiddleware.run(watchEventsLoadStart);

export default store;
