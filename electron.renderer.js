// This file is required by `index.html` and will be executed
// in the Electron renderer process for that window.

var text =
`We are using Node.js ${process.versions.node},
Chromium ${process.versions.chrome},
and Electron ${process.versions.electron}.`;

document.querySelector('.description').textContent = text;
