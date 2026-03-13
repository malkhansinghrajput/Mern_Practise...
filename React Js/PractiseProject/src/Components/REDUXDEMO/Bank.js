
import React, { Component } from 'react'
import { connect } from 'react-redux'
/*
The Connect() function conects a React Component to a Redux store.
*/

import { withdrwAmt, depositeAmt, iciciwithdrawAmt , icicidepositAmt, sbiwithdrawAmt, sbidepositAmt} from './ActionCreater'
import Button from 'react-bootstrap/Button';


class Bank extends Component {
  render() {
    return (
      <div>
        <h1>Bank Deatils</h1>
        <h1>Balance In Rs:{this.props.balance}</h1>
        <Button onClick={this.props.dispatch1}>
            Withdraw
        </Button>
        <Button onClick={this.props.dispatch2}>
            Deposite
        </Button>

        <h1>ICICI Bank Deatils</h1>
        <h1>ICICI Balance In Rs:{this.props.ICICIbalance}</h1>
        <Button onClick={this.props.dispatch3}>
           ICICI Withdraw
        </Button>
        <Button onClick={this.props.dispatch4}>
           ICICI Deposite
        </Button>

        <h1> SBI Bank Deatils</h1>
        <h1>SBI Balance In Rs:{this.props.SBIbalance}</h1>
        <Button onClick={this.props.dispatch5}>
           SBI Withdraw
        </Button>
        <Button onClick={this.props.dispatch6}>
           SBI Deposite
        </Button><hr></hr>



      </div>
    )
  }
}
//  const mapStateToProps = (state,ownprops) => {
//         return{
//             balance: state.balance
//         }
//     }

    const mapStateToProps = (state) => {
      return {
          ICICIbalance : state.icici.ICICIbalance,
          SBIbalance: state.sbi.SBIbalance,
          balance: state.test.balance
      }
    }

    const mapDispatchToProps = (dispatch, ownProps) => {
        return {
            dispatch1: () => dispatch(withdrwAmt()),
            dispatch2: () => dispatch(depositeAmt()),
            dispatch3: () => dispatch(iciciwithdrawAmt()),
            dispatch4: () => dispatch(icicidepositAmt()),
            dispatch5: () => dispatch(sbiwithdrawAmt()),
            dispatch6: () => dispatch(sbidepositAmt())
        }
    }

export default connect(mapStateToProps,mapDispatchToProps) (Bank)