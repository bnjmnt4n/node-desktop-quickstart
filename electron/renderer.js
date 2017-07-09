// This file is required by `index.html` and will be executed
// in the Electron renderer process for that window.

console.log('electron/renderer.js: Executing in the Electron renderer process.');

let versions = process.versions;
let text = getText('Electron', versions.electron, versions.node, versions.chrome);

setText(text);
