
import { combineReducers } from "@reduxjs/toolkit";
import homeReducer  from "./home/reducers";
import IState from '../../domain/interface/presentation/IState';


export const rootReducer = combineReducers<IState>({
    home:homeReducer
});
