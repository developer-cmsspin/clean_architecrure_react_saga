import 'reflect-metadata'
import { container } from 'tsyringe'
import HomeInfrastructure from './external/home/homeInfrastructure'

export const DependencyInjectionInfrastructure = (): void => {
  container.register('IHomeInfrastructure', {
    useClass: HomeInfrastructure
  })
}
export default DependencyInjectionInfrastructure
