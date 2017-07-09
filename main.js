// This file will be executed in Electron's main process
// and the NW.js Node context.

console.log('main.js: Executing in the main process.');

if (process.versions.electron) {
  require('./electron/main.js');
} else if (process.versions.nw) {
  require('./nw/main.js');
}
