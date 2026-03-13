/*import {createStore,combineReducers} from 'redux'
import {reducer, reducerICICI, reducerSBI,} from './Reducer'
const reducer1 = combineReducers({
    icici: reducerICICI,
    sbi: reducerSBI,
    test: reducer
})

const store = createStore(reducer1)
export default store */


import {createStore, applyMiddleware, combineReducers} from 'redux' 
import logger from 'redux-logger'
import { persistStore,persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
// default to localStorage for web

import { reducer , reducerICICI, reducerSBI} from './Reducer'


const rootReducer = combineReducers({
    icici: reducerICICI,
    sbi: reducerSBI,
    test:reducer
})

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

let store = createStore(persistedReducer,applyMiddleware(logger))
let persistor = persistStore(store)
export {store,persistor}