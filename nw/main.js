// This file will be executed in the NW.js Node context.

console.log('nw/main.js: Executing in the NW.js Node context.');

let options = {
  width: 800,
  height: 600,
  position: 'center'
};

nw.Window.open('index.html', options, win => {
});
