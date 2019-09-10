import { createStore, compose, applyMiddleware } from "redux";
import reducers from "./app/stepMaker/rootReducer";
import thunk from "redux-thunk";
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancer(applyMiddleware(thunk)));

export default store;