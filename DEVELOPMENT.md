# Development

A bunch of information for developers connected with "Time Series Admin" project.

## General info

Time Series Admin is based on [Facebook CRA](https://github.com/facebook/create-react-app).
It uses [Apollo Client](https://www.apollographql.com/docs/react/) for managing application local state.
[Material UI](https://material-ui.com/) provides user interface components.
Forms are handled with [React Final Form](https://github.com/final-form/react-final-form).

Yarn is used for dependency management.
Eslint provides JS linting.
Flow is used for type hinting.
CI is ensured with CircleCI.
Coverage reports are uploaded to Codecov service.

## Build development environment

0. Install Yarn
1. Execute `yarn`
1. Run `yarn start` to start development server on port **3000**

## Build locally

Use `yarn build` to compile release files.
Use `yarn db:start` to run local InfluxDB through Docker engine.
Created DB will have following credentials:

- URL: http://localhost:8086
- DB NAME: test
- USER: admin
- PASS: password

Use `yarn electron:dev` to develop Electron with live updates.
Use `yarn build` and `yarn electron` to test Electron releases before bundling.

## Tests

Unit & integration tests:

0. `yarn test` will trigger single run of all Jest tests
1. `yarn test:watch` starts watching for file changes and reruns Jest tests

End-to-end tests:

0. Start application with `yarn start`
1. Execute `yarn cypress:run` to start end-to-end Cypress based tests in headless mode

**NOTE:** You may open Cypress tests UI with `yarn cypress:open`.

## Deployment

Use `yarn dist:[platform]` to create platform specific bundle (`platform` may have following values: `docker`, `mac`, `win`, `linux`, `all`).

## Releases

0. Update CHANGELOG.md
1. Use `yarn publish` to set new version number (you will be prompted for that)
2. Execute `./release.sh` script to create Electron packages for every supported system
3. Push Docker images with `yarn release:docker`
4. Manually create Github release, upload files from step 2. and changes from CHANGELOG.md
5. Update `config.toml` file on Github page and follow deployment instruction there

## Notes

Electron distribution configuration is based on https://medium.freecodecamp.org/building-an-electron-application-with-create-react-app-97945861647c and https://medium.com/@kitze/%EF%B8%8F-from-react-to-an-electron-app-ready-for-production-a0468ecb1da3.
