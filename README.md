# jp-mean-universal

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.1.
The NestJS server was generated with the `ng add @nest/ng-universal` command and manually optimized, so that the server code is centralized under `projects/nest-server`. This is not a standalone Angular project like you would normally see in the angular.json file, instead it is tightly coubled with the `projects/universal-app` and acts also as REST-API.

This project was inspired by the following projects:

* [linnovate/mean](https://github.com/linnovate/mean)
* [TrilonIO/universal-nest](https://github.com/TrilonIO/universal-nest)
* [Angular-RU/angular-nest-starter](https://github.com/Angular-RU/angular-nest-starter)
* [nartc/nest-mean](https://github.com/nartc/nest-mean)

## Ressources

* [Official Angular Universal Guide](https://angular.io/guide/universal)
* [nestjs/ng-universal](https://github.com/nestjs/ng-universal)

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`.  
Run `npm run dev:ssr` for a full dev server including the nest server for development with SSR. Navigate to `http://localhost:4200/`.

## Production server

Run `npm run serve:ssr` for a full production server including the nest server with SSR.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the universal-app only. The build artifacts will be stored in the `dist/jp-mean/browser` directory. Use the `--prod` flag for a production build.  
Run `npm run build:ssr` to build the universal-app with the nest-server together. The build artifacts will be stored in the `dist/jp-mean/server` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Jest](https://jestjs.io/).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [@nrwl/cypress](https://www.npmjs.com/package/@nrwl/cypress).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).  
To get more help on the Nest CLI use `nest --help` or go check out the [Nest CLI README](https://github.com/nestjs/nest-cli/blob/master/README.md).
