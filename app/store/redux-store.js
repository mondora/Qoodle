import {applyMiddleware, compose, createStore} from "redux";
import logger from "redux-logger";
import storage from "redux-storage";
import createEngine from "redux-storage-engine-localstorage";
import thunk from "redux-thunk";
import filter from "redux-storage-decorator-filter";

import rootReducer from "../reducers";

const reducer = storage.reducer(rootReducer);

const storageEngine = filter(createEngine("b2b_auth_state"), [
    ["auth", "loginAuth"]
]);

const storageMiddleware = storage.createMiddleware(storageEngine, [], [
    "LOGIN_START",
    "LOGIN_SUCCESS",
    "LOGIN_ERROR",
    "LOGOUT"
]);
const loader = storage.createLoader(storageEngine);

const store = applyMiddleware(
    thunk,
    logger({collapsed: true}),
    storageMiddleware
)(createStore)(reducer);

loader(store);

export default store;
