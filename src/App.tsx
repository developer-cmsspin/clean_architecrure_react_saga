import React, { Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'
import 'reflect-metadata'
import DependencyInjectionDomain from './domain/dependencyInjectionDomain'
import { DependencyInjectionInfrastructure } from './infrastructure/dependencyInjectionInfrastructure'
import { DependencyInjectionApplication } from './application/dependencyInjectionApplication'
import Preloader from './presentation/components/preloader/index'
import RouteApp from './presentation/routers/routes'

const App: React.FC = () => {
  DependencyInjectionDomain()
  DependencyInjectionInfrastructure()
  DependencyInjectionApplication()

  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<Preloader />}>
          <RouteApp />
        </Suspense>
      </BrowserRouter>
    </>
  )
}

export default App
