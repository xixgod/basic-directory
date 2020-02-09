// @flow

import { createStore, applyMiddleware } from "redux";

import { createLogger } from "redux-logger";
import reduxThunk from "redux-thunk";
import rootReducer from "../reducers/index";

const logger = createLogger();

export default (initialState?: any) => {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(reduxThunk, logger)
  );
};
