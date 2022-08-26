import ResponseHome from '../model/responseHome';
export default class HomeState{

    public constructor(){
        this.home = new ResponseHome();
    }

    public home: ResponseHome;
}