import { GET_USER_DETAILS, ADD_USER_DETAIL, DELET_USER_DETAIL } from './Type'

const initialState = {
    users: []
}

export const Reducer = (state = initialState, action) => {
    switch (action.type) {

        case GET_USER_DETAILS: return {
            ...state,
            users: action.payload
        }

        case ADD_USER_DETAIL:
            const user = action.payload;
            return {
                ...state,
                users: [...state.users,
                {
                    id: Math.random(),
                    name: user.name,
                    age: user.age,
                    address: user.address,
                    gender: user.gender
                }
                ]
            }

        case DELET_USER_DETAIL: return {
            ...state,
            users: state.users.filter(user => user.id !== action.payload)
        }

        default:
            return state
    }
}
