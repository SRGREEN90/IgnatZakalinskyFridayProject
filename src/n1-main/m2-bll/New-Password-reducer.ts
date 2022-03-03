// import {authApi} from "../../api/Api";
import {Dispatch} from "redux";

const SET_NEW_PASSWORD = 'SET_NEW_PASSWORD'
//==================================================
let initialState = {

}
export type initialStateType = typeof initialState
const NewPasswordReducer = (state: initialStateType = initialState, action: mainType): initialStateType => {

    switch (action.type) {
        case SET_NEW_PASSWORD:
            return {
                ...state
            }
        default:
            return state
    }
}
type mainType = setNewPasswordACType
type setNewPasswordACType = ReturnType<typeof setNewPasswordAC>

export const setNewPasswordAC = () => ({type: 'SET_NEW_PASSWORD',} as const)

export default NewPasswordReducer
