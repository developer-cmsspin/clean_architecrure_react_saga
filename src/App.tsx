import React, { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import { Preloader } from "./presentation/home/components/preloader/index";
import "reflect-metadata";
import DependencyInjectionDomain from './domain/dependencyInjectionDomain';
import { DependencyInjectionInfrastructure } from './infrastructure/dependencyInjectionInfrastructure';
import { DependencyInjectionApplication } from './application/dependencyInjectionApplication';
import RoutesApp from "./presentation/routers";


const App: React.FC = () => {
  DependencyInjectionDomain.DependencyInjectionStartup();
  DependencyInjectionInfrastructure.DependencyInjectionStartup();
  DependencyInjectionApplication.DependencyInjectionStartup();

  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<Preloader />}>
          <RoutesApp />
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
