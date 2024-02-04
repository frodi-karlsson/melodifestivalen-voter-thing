const pug = require('pug');
const fs = require('fs');
const path = require('path');
const styleFiles = fs.readdirSync(path.join(__dirname, 'styles')).filter(file => file.endsWith('.css')).map(file => path.join('styles', file));

const css = styleFiles.map(file => {
	const content = fs.readFileSync(file, 'utf8');
	return content;
}).join('\n');
// Compile template.pug, and render a set of data
fs.writeFileSync('./index.html', pug.renderFile('index.pug', {css}));
