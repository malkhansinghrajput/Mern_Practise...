import { GET_USER_DETAILS, ADD_USER_DETAIL, DELETE_USER_DETAIL } from "./Type";

import React from 'react'

export const Get = (users) =>
     {
  return {
      type:
      GET_USER_DETAILS,
      payload: users
  }
}
export const Add = (user) => {
    return{
          type:
          ADD_USER_DETAIL,
          payload: user
    }
}
export const Delete = (id) => {
    return{
        type:
        DELETE_USER_DETAIL,
        payload: id

    }
}