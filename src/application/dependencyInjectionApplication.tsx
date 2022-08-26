import { container } from "tsyringe";
import HomeApplication from './home/homeApplication';

export class DependencyInjectionApplication {
    /**
     * @static DependencyInjectionApplication
     */
    public static DependencyInjectionStartup(): void {
        container.register("IHomeApplication", {
            useClass: HomeApplication,
        });
    }
}