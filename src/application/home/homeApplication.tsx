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

    public getHome(request: requestHome): Promise<ResponseHome>  {
        return this._infrastructure.getHomeServer(request);
    }
}