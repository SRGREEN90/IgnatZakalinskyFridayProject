// import {authApi} from "../../api/Api";
import {Dispatch} from "redux";

const SET_TEST = 'SET_TEST'
//==================================================
let initialState = {

}
export type initialStateType = typeof initialState
const TestReducer = (state: initialStateType = initialState, action: mainType): initialStateType => {

    switch (action.type) {
        case SET_TEST:
            return {
                ...state
            }
        default:
            return state
    }
}
type mainType = setTestACType
type setTestACType = ReturnType<typeof setTestAC>

export const setTestAC = () => ({type: 'SET_TEST',} as const)

export default TestReducer