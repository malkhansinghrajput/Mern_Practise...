import { createStore,combineReducers } from 'redux'

//ACTION TYPES
const ACTION_TYPE_1 = "ICICI_WITHDRAW"
const ACTION_TYPE_2 = "ICICI_DEPOSIT"
const ACTION_TYPE_3 = "SBI_WITHDRAW"
const ACTION_TYPE_4 = "SBI_DEPOSIT"

//ACTIONS
const action1 = {
    type: ACTION_TYPE_1
}
const action2 = {
    type: ACTION_TYPE_2
}
const action3 = {
    type: ACTION_TYPE_3
}
const action4 = {
    type: ACTION_TYPE_4
}

//ACTION CREATORS:Wrapper Function which returns actions
const iciciwithdrawAmt = () => {
    return action1
}
const icicidepositAmt = () => {
    return action2
}
const sbiwithdrawAmt = () => {
    return action3
}
const sbidepositAmt = () => {
    return action4
}

//REDUCER
const initialStateICICI = {
    ICICIbalance: 12345.12
}
const reducerICICI = (state = initialStateICICI, action) => {
    switch (action.type) {
        case ACTION_TYPE_1: return {
            ...state,
            ICICIbalance: state.ICICIbalance - 100
        }
        case ACTION_TYPE_2: return {
            ...state,
            ICICIbalance: state.ICICIbalance + 100
        }
        default: return state
    }
}
const initialStateSBI = {
    SBIbalance: 42345.12
}
const reducerSBI = (state = initialStateSBI, action) => {
    switch (action.type) {
        case ACTION_TYPE_3: return {
            ...state,
            SBIbalance: state.SBIbalance - 100
        }
        case ACTION_TYPE_4: return {
            ...state,
            SBIbalance: state.SBIbalance + 100
        }
        default: return state
    }
}

const reducer = combineReducers({
    icici:reducerICICI,
    sbi:reducerSBI
})

const store = createStore(reducer)
console.log("Initial State:",store.getState())
const unsubscribe = store.subscribe(()=>{
    console.log("Updated State:",store.getState())
})

store.dispatch(iciciwithdrawAmt())
store.dispatch(iciciwithdrawAmt())
store.dispatch(iciciwithdrawAmt())
store.dispatch(iciciwithdrawAmt())
store.dispatch(icicidepositAmt())
store.dispatch(icicidepositAmt())
store.dispatch(icicidepositAmt())
store.dispatch(icicidepositAmt())

// unsubscribe()
store.dispatch(sbidepositAmt())
store.dispatch(sbidepositAmt())
store.dispatch(sbiwithdrawAmt())
store.dispatch(sbiwithdrawAmt())
