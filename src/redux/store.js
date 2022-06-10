
import {legacy_createStore ,applyMiddleware,combineReducers,compose} from "redux";
import thunk from "redux-thunk";
import { authReduser } from "./Auth/Auth.reduser";
import { feedReduser } from "./Feed/Feed.reduser";

const rootReduser=combineReducers({
    auth: authReduser,
    feed: feedReduser
})

export const store=legacy_createStore(rootReduser ,applyMiddleware(thunk));
