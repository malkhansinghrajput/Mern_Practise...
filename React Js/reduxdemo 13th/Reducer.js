import {ACTION_TYPE_1,ACTION_TYPE_2,ACTION_TYPE_3,ACTION_TYPE_4,ACTION_TYPE_5,ACTION_TYPE_6, ACTION_TYPE_7, ACTION_TYPE_8} from './ActionType'

//REDUCER
const initialState = {
    balance: 12345.12
}
export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_TYPE_1: return {
            ...state,
            balance: state.balance - 100
        }
        case ACTION_TYPE_2: return {
            ...state,
            balance: state.balance + 100
        }
        default: return state
    }
}

//REDUCER
const initialStateICICI = {
    ICICIbalance:0
}
export const reducerICICI = (state = initialStateICICI, action) => {
    switch (action.type) {
        case ACTION_TYPE_3: return {
            ...state,
            ICICIbalance: state.ICICIbalance - 100
        }
        case ACTION_TYPE_4: return {
            ...state,
            ICICIbalance: state.ICICIbalance + 100
        }
        case ACTION_TYPE_7: return {
            ...state,
            ICICIbalance: action.payload
        }
        default: return state
    }
}
const initialStateSBI = {
    SBIbalance: 0
}
export const reducerSBI = (state = initialStateSBI, action) => {
    switch (action.type) {
        case ACTION_TYPE_5: return {
            ...state,
            SBIbalance: state.SBIbalance - 100
        }
        case ACTION_TYPE_6: return {
            ...state,
            SBIbalance: state.SBIbalance + 100
        }
        case ACTION_TYPE_8: return {
            ...state,
            SBIbalance: action.payload
        }
        default: return state
    }
}


