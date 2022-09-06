import "reflect-metadata";
import { container } from "tsyringe";
import HomeInfrastructure from './external/home/homeInfrastructure';


/**
 * @class DependencyInjectionInfrastructure
 */
export class DependencyInjectionInfrastructure {
    /**
     * @static DependencyInjectionInfrastructure
     */
    public static DependencyInjectionStartup(): void {
        container.register("IHomeInfrastructure", {
            useClass: HomeInfrastructure,
        });
    }
}
