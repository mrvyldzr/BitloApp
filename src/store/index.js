import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import Reducers from "./reducers/reducer";

const RootReducers = combineReducers({
  // reducers
  Reducers,
});

export const store = createStore(RootReducers, applyMiddleware(thunk));