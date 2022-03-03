// import {authApi} from "../../api/Api";
import {Dispatch} from "redux";

const SET_NEW_PROFILE = 'SET_NEW_PROFILE'
//==================================================
let initialState = {

}
export type initialStateType = typeof initialState
const ProfileReducer = (state: initialStateType = initialState, action: mainType): initialStateType => {

    switch (action.type) {
        case SET_NEW_PROFILE:
            return {
                ...state
            }
        default:
            return state
    }
}
type mainType = setProfileACType
type setProfileACType = ReturnType<typeof setProfileAC>

export const setProfileAC = () => ({type: 'SET_NEW_PROFILE',} as const)

export default ProfileReducer

