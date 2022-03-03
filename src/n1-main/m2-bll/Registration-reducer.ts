// import {authApi} from "../../api/Api";
import {Dispatch} from "redux";

const SET_REGISTRATION = 'SET_REGISTRATION'
//==================================================
let initialState = {

}
export type initialStateType = typeof initialState
const RegistrationReducer = (state: initialStateType = initialState, action: mainType): initialStateType => {

    switch (action.type) {
        case SET_REGISTRATION:
            return {
                ...state
            }
        default:
            return state
    }
}
type mainType = setRegistrationACType
type setRegistrationACType = ReturnType<typeof setRegistrationAC>

export const setRegistrationAC = () => ({type: 'SET_REGISTRATION',} as const)

export default RegistrationReducer