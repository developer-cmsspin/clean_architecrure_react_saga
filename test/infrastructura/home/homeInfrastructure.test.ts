import "reflect-metadata";
import DependencyInjectionDomain from '../../../src/domain/dependencyInjectionDomain';
import { DependencyInjectionApplication } from '../../../src/application/dependencyInjectionApplication';
import { DependencyInjectionInfrastructure } from '../../../src/infrastructure/dependencyInjectionInfrastructure';
import RequestHome from "../../../src/domain/home/model/requestHome";
import HomeInfrastructure from '../../../src/infrastructure/home/homeInfrastructure';


describe("infrastructure home", () => {
    test("infrastructure home getHomeServer", async () => {
        DependencyInjectionDomain.DependencyInjectionStartup();
        DependencyInjectionApplication.DependencyInjectionStartup();
        DependencyInjectionInfrastructure.DependencyInjectionStartup();

        let request = new RequestHome();
        request.customer = "";

        let infrastructure: HomeInfrastructure = new HomeInfrastructure();
        await infrastructure.getHomeServer(request);

        //expect(responseApplication).toBe(response);
    });
});
