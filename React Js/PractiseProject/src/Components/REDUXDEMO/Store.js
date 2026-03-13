import {createStore,combineReducers} from 'redux'
import {reducer, reducerICICI, reducerSBI,} from './Reducer'
const reducer1 = combineReducers({
    icici: reducerICICI,
    sbi: reducerSBI,
    test: reducer
})

const store = createStore(reducer1)
export default store