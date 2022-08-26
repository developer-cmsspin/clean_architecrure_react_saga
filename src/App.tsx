import React, { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import Preloader from "./presentation/components/preloader";
import RouteApp from "./presentation/routers/routes";
import "reflect-metadata";
import DependencyInjectionDomain from './domain/dependencyInjectionDomain';
import { DependencyInjectionInfrastructure } from './infrastructure/dependencyInjectionInfrastructure';
import { DependencyInjectionApplication } from './application/dependencyInjectionApplication';


const App: React.FC = () => {
  DependencyInjectionDomain.DependencyInjectionStartup();
  DependencyInjectionInfrastructure.DependencyInjectionStartup();
  DependencyInjectionApplication.DependencyInjectionStartup();

  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<Preloader />}>
          <RouteApp />
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
