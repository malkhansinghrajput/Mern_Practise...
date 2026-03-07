import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Button } from 'react-bootstrap'
/*
React Redux includes its own custom hook APIs, which allow your React components to subscribe to the Redux store and dispatch actions.
===========
useSelector:Allows you to extract data from the Redux store state for use in this component, using a selector function.
=============
useDispatch:This hook returns a reference to the dispatch function from the Redux store. You may use it to dispatch actions as needed.
*/
import { withdrawAmt, depositAmt,icicidepositAmt,iciciwithdrawAmt,sbidepositAmt,sbiwithdrawAmt } from './ActionCreators'

const BankHook = () => {
    // const balance = useSelector(state => state.balance)
    const balance = useSelector(state => state.test.balance)
    const ICICIbalance = useSelector(state=>state.icici.ICICIbalance)
    const SBIbalance = useSelector(state=>state.sbi.SBIbalance)

    const dispatch = useDispatch()
    return (
        <div>
            <h1>Bank Hook</h1>
            <h1>Balance in Rs:{balance}</h1>
            <Button onClick={() => dispatch(withdrawAmt())}>
                Withdraw
            </Button>
            <Button onClick={() => dispatch(depositAmt())}>
                Deposit
            </Button>
            <hr></hr>

            <h1>ICICI Bank Details</h1>
            <h1>ICICI Balance in Rs:{ICICIbalance}</h1>
            <Button onClick={() => dispatch(iciciwithdrawAmt())}>
                ICICI Withdraw
            </Button>
            <Button onClick={() => dispatch(icicidepositAmt())}>
                ICICI Deposit
            </Button>
            <hr></hr>
            <h1>SBI Bank Details</h1>
            <h1>SBI Balance in Rs:{SBIbalance}</h1>
            <Button onClick={() => dispatch(sbiwithdrawAmt())}>
                SBI Withdraw
            </Button>
            <Button onClick={() => dispatch(sbidepositAmt())}>
                SBI Deposit
            </Button>

        </div>
    )
}

export default BankHook