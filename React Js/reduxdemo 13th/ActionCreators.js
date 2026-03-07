import {action1,action2, action3, action4, action5, action6} from './Actions'
import { ACTION_TYPE_7, ACTION_TYPE_8 } from './ActionType'

//ACTION CREATORS:Wrapper Function which returns actions
export const withdrawAmt = () => {
    return action1
}
export const depositAmt = () => {
    return action2
}
export const iciciwithdrawAmt = () => {
    return action3
}
export const icicidepositAmt = () => {
    return action4
}
export const sbiwithdrawAmt = () => {
    return action5
}
export const sbidepositAmt = () => {
    return action6
}
export const addAmtICICI = (amt) => {
    return {
        type:ACTION_TYPE_7,
        payload:amt
    }
}
export const addAmtSBI = (amt) => {
    return {
        type:ACTION_TYPE_8,
        payload:amt
    }
}
