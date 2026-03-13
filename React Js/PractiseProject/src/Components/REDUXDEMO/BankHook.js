import React from 'react'
/*
React Redux include its own custom hook APIs,
which allow your React component to subscribe 
to the Redux Store and dispatch action
========
useSelector:Aloow you to extract data from the Redux store state for use in this component, using a selector function.
=========
useDispatch: This hook returns a reference to
the dispatch function from the Redux Store.
You may use it to dispatch action as needed.
*/
import { withdrwAmt,depositeAmt, iciciwithdrawAmt, icicidepositAmt, sbiwithdrawAmt, sbidepositAmt } from './ActionCreater'
import { useSelector,useDispatch} from 'react-redux'
import Button from 'react-bootstrap/Button';


 const BankHook = () => {
    // const balance =useSelector(state => state.balance)
     const balance = useSelector(state=> state.test.balance)
     const ICICIbalance = useSelector(state => state.icici.ICICIbalance)
     const SBIbalance = useSelector(state => state.sbi.SBIbalance)

    const dispatch = useDispatch()
  return (
    <div>
        <h1>BankHook Details</h1>
        <h1>Balance in Rs :{balance}</h1>
          <Button onClick={() => dispatch(withdrwAmt())}>Withdraw</Button>
        <Button onClick={() => dispatch(depositeAmt())}>Deposite</Button>
        

        <h1>ICICI BankHook Details</h1>
        <h1>ICICI Balance in Rs :{ICICIbalance}</h1>
          <Button onClick={() => dispatch(iciciwithdrawAmt())}>ICICI Withdraw</Button>
        <Button onClick={() => dispatch(icicidepositAmt())}>ICICI Deposite</Button>
        

        <h1>SBI BankHook Details</h1>
        <h1>Balance in Rs :{SBIbalance}</h1>
          <Button onClick={() => dispatch(sbiwithdrawAmt())}>SBI Withdraw</Button>
        <Button onClick={() => dispatch(sbidepositAmt())}>SBI Deposite</Button>
        <hr></hr>

    </div>
  )
}
export default BankHook