# node-desktop-quickstart

A simple Node.js/Chromium desktop quickstart, which can run on both Electron and NW.js. Useful for testing JavaScript libraries.

## Files

 * [`package.json`](./package.json): Installs prebuilt versions of Electron and NW.js, and configures various startup options for the app.
 * [`index.html`](./index.html): HTML file used for the app.
 * [`main.js`](./main.js): First script executed in the main process, which is used to execute either `electron/main.js` or `nw/main.js`.
 * [`renderer.js`](./renderer.js): First script executed in the renderer process, which is used to execute either `electron/renderer.js` or `nw/renderer.js`. Common functions can be exposed as globals here for easy access from both Electron and NW.js.
 * [`electron/main.js`](./electron/main.js): Script which will be executed in Electron's main process, used to open the first Electron window.
 * [`electron/renderer.js`](./electron/renderer.js): Script which will be executed in Electron's renderer process.
 * [`nw/main.js`](./nw/main.js): Script which will be executed in NW.js's Node context, used to open the first NW.js window.
 * [`nw/renderer.js`](./nw/renderer.js): Script which will be executed in NW.js's browser context.

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
$ npm run nw        # Run on NW.js.
```

## Current Versions

| Framework                            | Version      | Node  | Chromium |
| ------------------------------------ | :----------: | :---: | :------: |
| [Electron](https://electronjs.org/)  | 1.7.11       | 7.9.0 | 58       |
| [NW.js](https://nwjs.io/)            | 0.28.0 (SDK) | 9.4.0 | 64       |
