import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./reducers/recruitReducer.js";
import rootSaga from "./rootSaga.js";

const sagaMiddle = createSagaMiddleware();

const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddle)
);

sagaMiddle.run(rootSaga);

export default store;