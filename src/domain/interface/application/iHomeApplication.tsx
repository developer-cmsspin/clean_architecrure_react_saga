import RequestHome from '../../home/model/requestHome';
import ResponseHome from '../../home/model/responseHome';

export default interface IHomeApplication{
    getHome(request:RequestHome):Promise<ResponseHome> ;
}