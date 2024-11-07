# softo-ngx-components

softo-ngx-components is a component library.
This is generic purpose library specially developed for internal use of [SoftoSol](https://www.softosol.com).
To use this library, it is recommended to use bootstrap as bootstrap classes are used inside and is dependant on `@angular/material`

## Getting Started

Install softo-ngx-components using

```` bash
npm install softo-ngx-components
````

or  

```` bash
yarn add softo-ngx-components
````

Import `SoftoNgxComponents` inside your module.

```` Typescript
import { SoftoNgxComponentsModule } from 'softo-ngx-components';
...
imports:[
    ...
    SoftoNgxComponentsModule
]
````

## Table of Contents

1. [Tables](https://github.com/SoftoSol/softo-ngx-components/blob/main/documentation/tables/table-sortable.md)
1. [Notifier](https://github.com/SoftoSol/softo-ngx-components/blob/main/documentation/services/notifier.md)
1. [Alerts](https://github.com/SoftoSol/softo-ngx-components/blob/main/documentation/services/softo-alert.md)

## Change Log

You can find change log for each version

- [x.0.1](https://github.com/SoftoSol/softo-ngx-components/blob/main/documentation/changelog/x.0.1.md)  
- [13.2.5](https://github.com/SoftoSol/softo-ngx-components/blob/main/documentation/changelog/13.2.5.md)
- [13.2.3](https://github.com/SoftoSol/softo-ngx-components/blob/main/documentation/changelog/13.2.3.md)
- [13.2.2](https://github.com/SoftoSol/softo-ngx-components/blob/main/documentation/changelog/13.2.2.md)
- [13.1.3](https://github.com/SoftoSol/softo-ngx-components/blob/main/documentation/changelog/13.1.3.md)  

Please also remember to import `BrowserAnimationModule` along with `SoftoNgxComponents`  
