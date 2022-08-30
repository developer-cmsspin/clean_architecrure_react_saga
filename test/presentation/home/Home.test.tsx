import React from "react";
import '@testing-library/jest-dom';
import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../../src/presentation/redux/store';
import { MemoryRouter } from "react-router-dom";
import Layout from '../../../src/presentation/layouts/index';
import Home from '../../../src/presentation/pages/home';
import DependencyInjectionDomain from '../../../src/domain/dependencyInjectionDomain';
import { DependencyInjectionInfrastructure } from '../../../src/infrastructure/dependencyInjectionInfrastructure';
import { DependencyInjectionApplication } from '../../../src/application/dependencyInjectionApplication';


test("renders learn react link", async () => {
  DependencyInjectionDomain.DependencyInjectionStartup();
  DependencyInjectionInfrastructure.DependencyInjectionStartup();
  DependencyInjectionApplication.DependencyInjectionStartup();

  const route = '/'
  render(
    <Provider store={store}>
      <MemoryRouter initialEntries={[route]}>
        <Layout>
          <Home />
        </Layout>
      </MemoryRouter>
    </Provider>);


  screen.debug()
  const linkElement = screen.getByText(/Hola mundo/i);
  expect(linkElement).toBeInTheDocument();

  await waitForElementToBeRemoved(() => screen.getByAltText(/loading/i), {timeout:10000} );


  expect(screen.getByText(/list items/i)).toBeInTheDocument();
});
