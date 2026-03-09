import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { depositAmt, withDrawAmt } from './BankSlice'
import { Button } from 'react-bootstrap'

const Bank1 = () => {
    const balance = useSelector(state => state.bank.balance)
    const dispatch = useDispatch()
    return (
        <div>
            <h1>Bank Details</h1>
            <h1>Balance in Rs:{balance}</h1>
            <Button onClick={()=> dispatch(withDrawAmt())}>
                Withdraw
            </Button>
            <Button onClick={()=> dispatch(depositAmt())}>
                Deposit
            </Button><hr></hr>
        </div>
    )
}

export default Bank1