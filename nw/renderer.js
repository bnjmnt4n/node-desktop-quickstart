// This file is called by `index.html` and will be executed
// in the NW.js browser context for that window.

// Display DevTools. (The SDK flavour of NW.js is required.)
nw.Window.get().showDevTools();

let text =
`We are using Node.js ${process.versions.node},
Chromium ${process.versions.chrome || process.versions.chromium},
and NW.js ${process.versions.nw}.`;

document.querySelector('.description').textContent = text;
