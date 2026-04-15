const fs = require('fs');
let html = fs.readFileSync('report.html', 'utf8');

const regex = /<div class="step-bar">[\s\S]*?<div class="step-item.*?<div class="step-num">5<\/div>Generate<\/div>\s*<\/div>/g;
html = html.replace(regex, '');

fs.writeFileSync('report.html', html, 'utf8');
console.log('Done!');
