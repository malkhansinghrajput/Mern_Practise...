/*
createSlice:
A function that accepts an initial state, an object of reducer functions, and a "slice name", and automatically generates action creators and action types that correspond to the reducers and state.
*/
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    balance: 1200
}
const BankSlices = createSlice({
    name: 'BankStore1',
    initialState,
    reducers: {
        depositAmt: (state) => {
            return {
                ...state,
                balance: state.balance + 100
            }
        },
        withDrawAmt: (state) => {
            return {
                ...state,
                balance: state.balance - 100
            };
        },
    }
})
// Action creators are generated for each case reducer function
export const { depositAmt, withDrawAmt } = BankSlices.actions;
export default BankSlices.reducer;