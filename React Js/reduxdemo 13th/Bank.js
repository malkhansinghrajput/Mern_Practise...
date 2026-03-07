import React, { Component } from 'react'
import { connect } from 'react-redux'
/*
The connect() function connects a React component to a Redux store.
*/
import { withdrawAmt, depositAmt,icicidepositAmt,iciciwithdrawAmt,sbidepositAmt,sbiwithdrawAmt, addAmtICICI, addAmtSBI } from './ActionCreators'
import { Button,Form } from 'react-bootstrap'

class Bank extends Component {
    constructor(props) {
      super(props)
    
      this.initialState = {
        balanceinICICI:"",
        balanceinSBI:"",
      }
      this.state=this.initialState
    }
    handleChange = (e) => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }
     handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.state)
        this.props.dispatch7(parseFloat(this.state.balanceinICICI))
        this.props.dispatch8(parseFloat(this.state.balanceinSBI))
        this.setState(this.initialState)
    }
    
    render() {
        return (
            <div>
                <Form style={{margin:20}} 
                onSubmit={this.handleSubmit}>
                    <Form.Group className="mb-3" controlId="icici">
                        <Form.Control type="text" placeholder="Enter a Amount in ICICI"
                        name='balanceinICICI'
                            value={this.state.balanceinICICI}
                            onChange={this.handleChange}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="sbi">
                        <Form.Control type="text" placeholder="Enter a Amount in SBI"
                        name='balanceinSBI'
                            value={this.state.balanceinSBI}
                            onChange={this.handleChange}
                        />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
                <h1>Bank Details</h1>
                <h1>Balance in Rs:{this.props.balance}</h1>
                <Button onClick={this.props.dispatch1}>
                    Withdraw
                </Button>
                <Button onClick={this.props.dispatch2}>
                    Deposit
                </Button><hr></hr>
                
                 <h1>ICICI Bank Details</h1>
                <h1>ICICI Balance in Rs:{this.props.ICICIbalance}</h1>
                <Button onClick={this.props.dispatch3}>
                    ICICI Withdraw
                </Button>
                <Button onClick={this.props.dispatch4}>
                    ICICI Deposit
                </Button>
                <hr></hr>

                
                 <h1>SBI Bank Details</h1>
                <h1>SBI Balance in Rs:{this.props.SBIbalance}</h1>
                <Button onClick={this.props.dispatch5}>
                    SBI Withdraw
                </Button>
                <Button onClick={this.props.dispatch6}>
                    SBI Deposit
                </Button>
            </div>
        )
    }
}

// const mapStateToProps = (state, ownProps) => {
//     return {
//         balance: state.balance
//     }
// }

const mapStateToProps = (state, ownProps) => {
    return {
        ICICIbalance: state.icici.ICICIbalance,
        SBIbalance: state.sbi.SBIbalance,
        balance:state.test.balance
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        dispatch1: () => dispatch(withdrawAmt()),
        dispatch2: () => dispatch(depositAmt()),
        dispatch3: () => dispatch(iciciwithdrawAmt()),
        dispatch4: () => dispatch(icicidepositAmt()),
        dispatch5: () => dispatch(sbiwithdrawAmt()),
        dispatch6: () => dispatch(sbidepositAmt()),
        dispatch7: (amt) => dispatch(addAmtICICI(amt)),
        dispatch8: (amt) => dispatch(addAmtSBI(amt)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Bank)