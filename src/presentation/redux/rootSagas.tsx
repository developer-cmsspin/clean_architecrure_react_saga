import { all } from "redux-saga/effects";
import homeSaga from './home/actionCreator';


export default function* rootSaga(){
    yield all([homeSaga()]);
}