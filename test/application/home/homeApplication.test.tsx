import { Mock } from "moq.ts";
import { container } from "tsyringe";
import { IHomeInfrastructure } from '../../../src/domain/interface/infrastructure/iHomeInfrastructure';
import DependencyInjectionDomain from '../../../src/domain/dependencyInjectionDomain';
import { DependencyInjectionApplication } from '../../../src/application/dependencyInjectionApplication';
import { DependencyInjectionInfrastructure } from '../../../src/infrastructure/dependencyInjectionInfrastructure';
import RequestHome from "../../../src/domain/home/model/requestHome";
import ResponseHome from "../../../src/domain/home/model/responseHome";
import FakeCard from "../../extend/fakerCard";
import HomeApplication from "../../../src/application/home/homeApplication";


//Jest test
const mockInfrastructure = jest.mock<IHomeInfrastructure>(
    "../src/domain/interface/infrastructure/iHomeInfrastructure"
);

describe("application home", () => {
    test("application home gethome", async () => {
        DependencyInjectionDomain.DependencyInjectionStartup();
        DependencyInjectionApplication.DependencyInjectionStartup();
        DependencyInjectionInfrastructure.DependencyInjectionStartup();

        let request = new RequestHome();
        request.customer = "";

        let response = new ResponseHome();
        response.count = 2;
        response.cards = [FakeCard.CreateCard(), FakeCard.CreateCard()]

        const infrastructure = new Mock<IHomeInfrastructure>()
            .setup((instance) => instance.getHomeServer(request))
            .returns(Promise.resolve(response))
            .object();


        //DI
        container.register<IHomeInfrastructure>("IHomeInfrastructure", {
            useValue: infrastructure,
        });

        let application: HomeApplication = new HomeApplication();
        let responseApplication = await application.getHome(request);

        expect(responseApplication).toBe(response);
    });
});
