# Exjobb SPA
This is the a simple single-page application developed for a degree project at KTH. The project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Installation
1. Ensure that you have [Node](https://nodejs.org/en/) and npm installed on your system.
    - The project was developed with the following versions, so try to use similar:
        - `Node v16.15.1`
        - `npm 8.12.1`
2. Clone this repo.
3. Go into the repo and execute:
```
npm install
```

## Run in development mode
```
npm start
```
Runs the application in development mode at [http://localhost:3000](http://localhost:3000) with hot reload if you edit the code.

## Build
```
npm run build
```
Builds the root configuration and places the output in `build/`.

## Run in production mode
1. Ensure that you have [docker](https://www.docker.com/) installed.
2. [Build](#build) the application.
3. Execute:
```
npm run docker-compose
```

This starts a simple Nginx web server hosting the application in a docker container, making the application available at [http://localhost:3000](http://localhost:3000).

## Execute GreenFrame scenarios
> **NOTE!**
> - You need a GreenFrame license and account to use GreenFrame
> - GreenFrame only supports MacOS and Linux (i.e., not Windows).

1. Install the GreenFrame CLI and export you token as described [here](https://docs.greenframe.io/).
2. [Start the application in docker.](#run-in-production-mode)
2. Inside `greenframe/` execute `greenframe open` to debug the scenarios.
3. Inside `greenframe/` execute `greenframe analyze` to run the scenarios and measure energy consumption.


<details>
  <summary><b>GreenFrame cannot find a browser?</b></summary>

  > If GreenFrame cannot find a browser when running `greenframe open`:
  > - If you already have a browser at another location, find the GreenFrame CLI library on you computer and add the path to you browser executable in the file `src/services/detectExecutablePath.js`.
  >   - The default location for GreenFrame CLI seems to be `~/.local/lib/greenframe/`
  >   - The executable to Google Chrome on mac is usually: `'/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome'`
  > - Install Chromium or Google Chrome and place at the locations specified in the error message.
</details>
