import "reflect-metadata";
import { container } from "tsyringe";
import RequestHome from "../../../domain/home/model/requestHome";
import IHomeApplication from '../../../domain/interface/application/iHomeApplication';
import { call, put, takeLatest } from "redux-saga/effects"
import { homePageSuccess, homePageErr } from "./reducers";

function* homePage(): any {
    try {
        const homeApplication = container.resolve<IHomeApplication>(
            "IHomeApplication"
        );
        let response = yield call(() => homeApplication.getHome(new RequestHome()));
        yield put(homePageSuccess(response));
    } catch (ex) {
        yield put(homePageErr(ex));
        console.log(ex);
    }
}

export default function* homeSaga() {
    yield takeLatest("home/homePageBegin", homePage);
}
