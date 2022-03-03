// import {authApi} from "../../api/Api";
import {Dispatch} from "redux";

const SET_RECOVERY = 'SET_RECOVERY'
//==================================================
let initialState = {

}
export type initialStateType = typeof initialState
const RecoveryReducer = (state: initialStateType = initialState, action: mainType): initialStateType => {

    switch (action.type) {
        case SET_RECOVERY:
            return {
                ...state
            }
        default:
            return state
    }
}
type mainType = setRecoveryACType
type setRecoveryACType = ReturnType<typeof setRecoveryAC>

export const setRecoveryAC = () => ({type: 'SET_RECOVERY',} as const)

export default RecoveryReducer

