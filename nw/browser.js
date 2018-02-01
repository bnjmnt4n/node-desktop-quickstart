// This file is called by `index.html` and will be executed
// in the NW.js browser context for that window.

console.log('nw/browser.js: Executing in the NW.js browser context.');

// Display DevTools. (The SDK flavour of NW.js is required.)
nw.Window.get().showDevTools();

let versions = process.versions;
let text = getText('NW.js', versions.nw, versions.node, versions.chrome || versions.chromium);

setText(text);
