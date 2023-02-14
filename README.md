# Practica01

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.0.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Define que es un componente y al crearlo que elementos lo forman:
- Un componente en Angular es un elemento que está compuesto por archivos, el cual es nuestro HTML, que es el que se va a visualizar en la interfaz de usuario, la vista o en términos más simples lo que vas a ver en la página.
Los componentes son como etiquetas html que podemos inventarnos para realizar las funciones necesarias. Pueden ser cosas diversas desde una sección de navegación a un formulario. Los componentes son pequeñas partes lógicas de la aplicación.
Un componente es un bloque, que contiene un template, contiene estilos , contiene lógica. Un componente esta compuesto por un archivo .ts , uno html y uno css.

## Define que es un modulo y que función tiene el patrón de diseño decorator.
- Un modulo de angular, es un conjunto dedicado a un ambito concreto de la aplicacion o una funcionalidad especifica. Un módulo (o biblioteca) es una colección de definiciones de variables, funciones y tipos (entre otras cosas) que pueden ser importadas para ser usadas desde cualquier programa.
El patron de diseño Decorator asigna responsabilidades adicionales a un objeto dinamicamnete, proporcionando una alternativa flexibles a la herencia para extender la funcionalidad. permite estructrurar una logica de negocios en capas, crear un decorator para cada capa y componer objetos con varias combinaciones de esta logica.

## Elementos importantes de un @NgModule:
- declarations: Las vistas que pertenecen a tu módulo. Hay 3 tipos de clases de tipo vista: componentes, directivas y pipes.
- exports: Conjunto de declaraciones que deben ser accesibles para templates de componentes de otros módulos.
- imports: Otros NgModules, cuyas clases exportadas son requeridas por templates de componentes de este módulo.
- providers: Los servicios que necesita este módulo, y que estarán disponibles para toda la aplicación.
- bootstrap: Define la vista raíz. Utilizado solo por el root module.
