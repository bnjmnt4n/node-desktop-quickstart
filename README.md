# node-desktop-quickstart

A simple Node.js/Chromium desktop app, which can run on both Electron and NW.js. Useful for testing JavaScript libraries.

Files:
 * [`package.json`](./package.json): Installs prebuilt versions of Electron and NW.js, and configures various startup options for the app.
 * [`index.html`](./index.html): HTML file used for the app.
 * [`electron.main.js`](./electron.main.js): Script which will be executed in Electron's main process, used to start the Electron app.
 * [`electron.renderer.js`](./electron.renderer.js): Script which will be executed in Electron's renderer process.
 * [`nw.main.js`](./nw.main.js): Script which will be executed in NW.js's Node context.
 * [`nw.renderer.js`](./nw.renderer.js): Script which will be executed in NW.js's browser context.

## Usage

You’ll need to have [Git](https://git-scm.com/) and [Node.js](https://nodejs.org/) (which comes with [npm](https://www.npmjs.com/)) installed on your computer.

```sh
# Clone this repository.
$ git clone https://github.com/demoneaux/node-desktop-quickstart

# Go into the repository.
$ cd node-desktop-quickstart

# Install dependencies - prebuilt versions of Electron and NW.js.
$ npm install

# Run the app.
$ npm run electron  # Run on Electron.
$ npm run nwjs      # Run on NW.js.
```
