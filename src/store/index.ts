import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { jobsReducer } from "./reducers/jobsReducer";
import { jobReducer } from "./reducers/jobReducer";

const middlewares = [thunk];

const composeEnhancers = composeWithDevTools({});

const rootReducer = combineReducers({
    jobs: jobsReducer,
    job: jobReducer
});

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(...middlewares))
);

export type RootState = ReturnType<typeof rootReducer>;
export default store;
