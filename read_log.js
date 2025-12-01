const fs = require('fs');
const content = fs.readFileSync('build_log.txt', 'utf16le'); // Try utf16le first as it was reported
console.log(content);
