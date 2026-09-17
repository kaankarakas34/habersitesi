const fs = require('fs');
const path = require('path');
const dir = path.join(__dirname, 'content-generators');
const files = fs.readdirSync(dir).filter(f => f.startsWith('cluster') && f.endsWith('.js'));

for (const f of files) {
  const p = path.join(dir, f);
  let content = fs.readFileSync(p, 'utf-8');
  if (content.includes('\\`')) {
    console.log('Fixing backticks in:', f);
    content = content.split('\\`').join('`');
    fs.writeFileSync(p, content, 'utf-8');
  }
}
console.log('Done fixing backticks.');
