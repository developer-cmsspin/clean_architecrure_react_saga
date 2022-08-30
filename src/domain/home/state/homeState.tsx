import ResponseHome from '../model/responseHome';
export default class HomeState {
    public data: ResponseHome  = new ResponseHome();
    public loading: boolean = false;

    public static initialState = {
        data: new ResponseHome(),
        loading: false
    }
}