// import {authApi} from "../../api/Api";
import {Dispatch} from "redux";

const SET_ERROR = 'SET_ERROR'
//==================================================
let initialState = {

}
export type initialStateType = typeof initialState
const ErrorReducer = (state: initialStateType = initialState, action: mainType): initialStateType => {

    switch (action.type) {
        case SET_ERROR:
            return {
                ...state
            }
        default:
            return state
    }
}
type mainType = setErrorACType
type setErrorACType = ReturnType<typeof setErrorAC>

export const setErrorAC = () => ({type: 'SET_ERROR',} as const)

export default ErrorReducer

