import { combineReducers, createStore, compose, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import jobReducer from './job/reducer';

const reducers = combineReducers({
  job: jobReducer,
});

export type RootState = ReturnType<typeof reducers>;

const store = (createStore as any)(reducers, compose(applyMiddleware(thunk)));

export default store;
