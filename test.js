const path = require('path');

const REACT_WRAPPER = '/lib/react-wrapper.js';
const absoluteOut = path.resolve('docs/');

const relPath = path.relative(absoluteOut, path.join('./node_modules', REACT_WRAPPER));

console.log('absoluteOut :', absoluteOut);
console.log('relPath :', relPath);
