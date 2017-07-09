// This file is required by `index.html` and will be executed
// in the Electron renderer process or the NW.js browser
// context for that window.

console.log('renderer.js: Executing in the renderer process.');

// Functions can be declared globally here for easy access from
// both Electron and NW.js.
const getText = (framework, version, node, chromium) =>
`Running on ${framework} ${version}
(Node.js ${node}, Chromium ${chromium}).`;

const setText = text =>
  document.querySelector('.description').textContent = text;

// Load in the specific renderer files for each framework in the
// browser context.
if (process.versions.electron) {
  require('./electron/renderer.js');
} else if (process.versions.nw) {
  document.write('<script src="nw/renderer.js"><\/script>');
}
