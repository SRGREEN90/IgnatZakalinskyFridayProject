// import {authApi} from "../../api/Api";
import {Dispatch} from "redux";

const SET_LOGIN = 'SET_LOGIN'
//==================================================
let initialState = {

}
export type initialStateType = typeof initialState
const LoginReducer = (state: initialStateType = initialState, action: mainType): initialStateType => {

    switch (action.type) {
        case SET_LOGIN:
            return {
                ...state
            }
        default:
            return state
    }
}
type mainType = setLoginACType
type setLoginACType = ReturnType<typeof setLoginAC>

export const setLoginAC = () => ({type: 'SET_LOGIN',} as const)

export default LoginReducer