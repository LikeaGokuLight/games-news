// Redux Initial Setup
import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import thunk from "redux-thunk";

// My Reducers
import {gamesReducer} from "../reducers/gamesReducer";
import {detailReducer} from "../reducers/detailReducer";
import {userReducer} from "../reducers/userReducer";

// Combine Reducers
const rootReducers = combineReducers({
    games: gamesReducer,
    detail: detailReducer,
    user: userReducer
})

export const store = createStore( rootReducers, composeWithDevTools(applyMiddleware(thunk)) )