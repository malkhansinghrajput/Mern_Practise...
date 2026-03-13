import { Reducer } from "./Reducer";
import { createStore, applyMiddleware } from 'redux'
import logger from "redux-logger";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig ={
    key: 'roort',
    storage
}

const persistedReducer = persistReducer(persistConfig, Reducer,applyMiddleware(logger))
const store = createStore(persistedReducer)
const persistor = persistStore(store)
export {store, persistor }