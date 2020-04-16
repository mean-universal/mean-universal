# MEAN Universal

Why just another MEAN stack project?
 
The most well-known [meanjs.org](https://www.meanjs.org) is outdated with the old AngularJS and there are nowadays also some pretty cool alternatives for the backend which makes the developers live easier.

... so what do you get with this project?

* M: The database MongoDB
* E: Stands for [ExpressJS](https://expressjs.com/de/), but here switched over to [NestJS](https://nestjs.com/)
* A: [Angular](https://angular.io/) 9+ combined with the [Universal](https://angular.io/guide/universal) part for SSR (Server-Side-Rendering)
* N: [NodeJS](https://nodejs.org/en/), which indicates only the runtime platform

... but wait, there is also a version with Express: [mean.io](https://github.com/linnovate/mean) - from Linnovate - if you want a more classical approach.

## Why using NestJS?

NestJS offer's a similar module/service structure like Angular does and has a lot of standard helper packages provided and maintained by the framework team itself and from the community.
This makes building a complete full-stack app much easier, especially when it comes to bigger developer teams. You don't have to discuss why you prefer this code style or architecture over this, because Angular and NestJS predefine many things and as a bonus it is much easier to hook new developers in.

With NestJS it is also much easier to switch from MongoDB to TypeORM and use there any of the most well-known database system like MariaDB, Postgres, MSSQL or an Oracle DB. 

## Project Setup

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.1.
The NestJS server was generated with the `ng add @nest/ng-universal` command and manually optimized, so that the server code is centralized under `projects/nest-server`.
This is not a standalone Angular project like you would normally see in the angular.json file, instead it is tightly coubled with the `projects/universal-app` and acts also as REST-API.

## Ressources

* [Official Angular Universal Guide](https://angular.io/guide/universal)
* [nestjs/ng-universal](https://github.com/nestjs/ng-universal)
* [Official NestJS Docs](https://docs.nestjs.com/)

This project was inspired by the following projects:

* [linnovate/mean](https://github.com/linnovate/mean)
* [TrilonIO/universal-nest](https://github.com/TrilonIO/universal-nest)
* [Angular-RU/angular-nest-starter](https://github.com/Angular-RU/angular-nest-starter)
* [nartc/nest-mean](https://github.com/nartc/nest-mean)

## Prerequisites

The project provides a [docker-compose.yml](docker-compose.yml) for development. So it's recommended that you know some Docker basics if you want to use it, but you can also setup your own database and node server.

If you want to learn more about docker take a look at the official [docs.docker.com](https://docs.docker.com/).

## Development server

* Run `ng serve` for a classic Angular dev server. Navigate to `http://localhost:4200/`.  
* Run `npm run dev:ssr` for a dev server including the nest server for development with SSR. Navigate to `http://localhost:4200/`.

## Production server

Notice: You have to build the project first to start a production server.

Run `npm run serve:ssr` for a full production server including the nest server with SSR and the REST-API.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

* Run `npm run build` to build the universal-app only. The build artifacts will be stored in the `dist/jp-mean/browser` directory. Use the `--prod` flag for a production build.  
* Run `npm run build:ssr` to build the universal-app with the nest-server together. The build artifacts for the server part will be stored in the `dist/jp-mean/server` directory.

## Running unit tests

All unit tests are getting executed with [Jest](https://jestjs.io/).

* Run `npm run test` to execute the unit tests for the universal-app.
* Run `npm run test:server` to execute the unit tests for the nest-server.

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [@nrwl/cypress](https://www.npmjs.com/package/@nrwl/cypress).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).  
To get more help on the Nest CLI use `nest --help` or go check out the [Nest CLI README](https://github.com/nestjs/nest-cli/blob/master/README.md).
