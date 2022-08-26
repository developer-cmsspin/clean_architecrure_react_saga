import { container } from "tsyringe";
import HomeInfrastructure from './home/homeInfrastructure';


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
