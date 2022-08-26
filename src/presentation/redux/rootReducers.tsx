
import { combineReducers } from "@reduxjs/toolkit";
import homeReducer  from "./home/reducers";

export const rootReducer = combineReducers({
    home:homeReducer
});
