# webpack2-karma-jasmine-react

This repo contains starter files used to create React components with testing in Karma and Jasmine. 

![Screenshot](/img/karma-jasmine.png)

## How to get started

The project uses Webpack to bundle and transpile the source code to a browser friendly format. You can run the project in two modes (dev and build). Run the following command to install dependencies, then choose a build mode.

```
$ npm install
```

### Development

Dev mode launches the project in the Webpack Dev Server with hot reloading for editing convience. Run the following command and open a browser to http://localhost:8080.

```
$ npm start
```

### Production

Build mode sets the environment to 'production' and optimizes the bundle for deployment. The files are optimized by using Webpack plugins, replacing React with Preact, and GZipping the resulting bundle. Run the following command and view the files in the build folder.

```
$ npm run build
```

## How to run tests

The project uses Karma as a test runner and Jasmine as the BDD test suite. In addition, we're using Enzyme to unit test the components in the app. Run the following command to view a single run of the application tests.

```
$ npm test
```
