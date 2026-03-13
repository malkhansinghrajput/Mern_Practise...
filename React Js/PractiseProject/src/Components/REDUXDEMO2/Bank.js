import React, { Component } from 'react'
import { connect } from 'react-redux'
/*
The Connect() function connects a React componenet to a Redux store.
*/

import { addAmtICICI, addAmtSBI, depositAmt, icicidepositAmt, iciciwithdrawAmt, sbidepositAmt, sbiwithdrawAmt, withdrawAmt } from './ActionCreater'

import { Button, Form } from 'react-bootstrap'

class Bank extends Component {
  constructor(props) {
     super(props)

     this.initialState ={
      balanceinICICI:"",
      balanceinSBI:"",
     }
     this.state = this.initialState
  }
   handleChange = (e) => {
     const { name , value} = e.target
     this.setState({
      [name] :value
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
          <Form.Group
          ClassName="mb-3"
          controlId="icici">
            <Form.Control
             type="text"
             placeholder="Enter a Amount 
             in ICICI"
             name='balanceinICICI'
             value={this.state.balanceinICICI}
             onChange={this.handleChange} />
          </Form.Group>

           <Form.Group
          ClassName="mb-3"
          controlId="sbi">
            <Form.Control
             type="text"
             placeholder="Enter a Amount 
             in SBI"
             name='balanceinSBI'
             value={this.state.balanceinSBI}
             onChange={this.handleChange} />
          </Form.Group>

          <Button variant="primary" type="submit">Submit</Button>
        </Form>
        <h1> BANK DETAILS</h1>
        <h1>BAlance in Ruppes: {this.props.balance} </h1>
        <Button onClick={this.props.dispatch1}>
         withdrw 
        </Button>
         <Button onClick={this.props.dispatch2}>
          deposite
        </Button><hr></hr>

        <h1> ICICI BANK DETAILS</h1>
        <h1>BAlance in Ruppes: {this.props.ICICIbalance} </h1>
        <Button onClick={this.props.dispatch3}>
         ICICI withdrw 
        </Button>
         <Button onClick={this.props.dispatch4}>
          ICICI deposite
        </Button><hr></hr>

        <h1>SBI BANK DETAILS</h1>
        <h1>BAlance in Ruppes: {this.props.SBIbalance} </h1>
        <Button onClick={this.props.dispatch5}>
        SBI withdrw 
        </Button>
         <Button onClick={this.props.dispatch6}>
         SBI deposite
        </Button><hr></hr>

      </div>
    )
  }
}

const mapStateToProps = (state,ownProps) => {
  return{
    ICICIbalance: state.icici.ICICIbalance,
    SBIbalance: state.sbi.SBIbalance,
    balance:state.test.balance
  }
}
const mapDispatchToProps = (dispatch,ownprops) => {
  return{
    dispatch1 : () => dispatch(withdrawAmt()),
    dispatch2 : () => dispatch(depositAmt()),
    dispatch3 : () => dispatch(iciciwithdrawAmt()),
    dispatch4 : () => dispatch(icicidepositAmt()),
    dispatch5 : () => dispatch(sbiwithdrawAmt()),
     dispatch6 : () => dispatch(sbidepositAmt()),
    dispatch7 : (amt) => dispatch(addAmtICICI(amt)),
    dispatch8 : (amt) => dispatch(addAmtSBI(amt)),
    
  }

}

export default connect(mapStateToProps,mapDispatchToProps)(Bank)