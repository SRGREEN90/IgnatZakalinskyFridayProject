import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import ErrorReducer from "./Error-reducer";
import LoginReducer from "./Login-reducer";
import NewPasswordReducer from "./New-Password-reducer";
import ProfileReducer from "./Profile-reducer";
import RegistrationReducer from "./Registration-reducer";
import TestReducer from "./Test-reducer";


let rootReducer = combineReducers({
    error: ErrorReducer,
    login: LoginReducer,
    newPassword: NewPasswordReducer,
    profile: ProfileReducer,
    registration: RegistrationReducer,
    test: TestReducer
})

let store = createStore(rootReducer, applyMiddleware(thunk))


export type ReduxStoreType = typeof store
export type ReduxStateType = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch
export default store