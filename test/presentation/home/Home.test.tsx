import React from "react";
import '@testing-library/jest-dom';
import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from "react-router-dom";
import Layout from '../../../src/presentation/commons/layouts/index';
import DependencyInjectionDomain from '../../../src/domain/dependencyInjectionDomain';
import { DependencyInjectionInfrastructure } from '../../../src/infrastructure/dependencyInjectionInfrastructure';
import { DependencyInjectionApplication } from '../../../src/application/dependencyInjectionApplication';
import { IHomeInfrastructure } from '../../../src/domain/interface/infrastructure/iHomeInfrastructure';
import { Mock } from 'moq.ts';
import Home from '../../../src/presentation/home/pages/home';
import RequestHome from '../../../src/domain/home/model/requestHome';
import "reflect-metadata";
import { container } from 'tsyringe';
import { store } from '../../../src/infrastructure/redux/store';




describe("presentation home", () => {
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

    const linkElement = screen.getByText(/Hola mundo/i);
    expect(linkElement).toBeInTheDocument();

    await waitForElementToBeRemoved(() => screen.getByAltText(/loading/i), { timeout: 10000 });
    expect(screen.getByText(/list items/i)).toBeInTheDocument();
  });
});


describe("presentation home errors", () => {
  test("renders learn react link error api", async () => {
    DependencyInjectionDomain.DependencyInjectionStartup();
    DependencyInjectionInfrastructure.DependencyInjectionStartup();
    DependencyInjectionApplication.DependencyInjectionStartup();

    let request = new RequestHome();
    request.customer = "";

    const infrastructureMock = new Mock<IHomeInfrastructure>()
      .setup((instance) => instance.getHomeServer(request))
      .throws(new Error("not connect to service"));
    //DI
    container.register<IHomeInfrastructure>("IHomeInfrastructure", {
      useValue: infrastructureMock.object(),
    });

    const route = '/'
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={[route]}>
          <Layout>
            <Home />
          </Layout>
        </MemoryRouter>
      </Provider>);

    const linkElement = screen.getByText(/Hola mundo/i);
    expect(linkElement).toBeInTheDocument();
  })
});
