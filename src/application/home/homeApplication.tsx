import { injectable, container } from 'tsyringe';
import "reflect-metadata";
import requestHome from '../../domain/home/model/requestHome';
import IHomeApplication from '../../domain/interface/application/iHomeApplication';
import { IHomeInfrastructure } from '../../domain/interface/infrastructure/iHomeInfrastructure';
import ResponseHome from '../../domain/home/model/responseHome';


@injectable()
export default class HomeApplication implements IHomeApplication {
    private _infrastructure: IHomeInfrastructure;

    //constructor(@inject("IHomeInfrastructure") infrastructure: IHomeInfrastructure) {
    
    constructor() {
        this._infrastructure = container.resolve<IHomeInfrastructure>(
            "IHomeInfrastructure"
        );
        
        //this._infrastructure = infrastructure;
    }

    public handler(request: requestHome): Promise<ResponseHome>  {
        try {
            return this._infrastructure.getHomeServer(request);    
        } catch (ex:any) {
            let errorResponse = new ResponseHome();
            errorResponse.error  = ex.message;
            return Promise.resolve(errorResponse);
        }
    }
}