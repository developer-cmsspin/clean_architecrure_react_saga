import ResponseHome from '../model/responseHome';
export default class HomeState {

    public constructor() {
        this.data = new ResponseHome();
        this.loading = false;
    }

    public data: ResponseHome;
    public loading: boolean;


    public static initialState = {
        data: new ResponseHome(),
        loading: false
    }
}