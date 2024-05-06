import { combineReducers, createStore, compose, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import jobReducer from "./job/reducer";

const reducers = combineReducers({
  job: jobReducer,
});

export type RootState = ReturnType<typeof reducers>;

/**
 * @description The document specification says that we should use redux,
 * In an ideal scenario, redux-toolkit/recoil/zustand or simply context would be a better choice, because the `createStore` is deprecated in redux
 * And it is not recommended to use the redux package directly
 */
const store = (createStore as any)(reducers, compose(applyMiddleware(thunk)));

export default store;
