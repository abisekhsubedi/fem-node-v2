import fs from 'node:fs/promises';
import path from 'node:path';

const __dirname = path.dirname(new URL(import.meta.url).pathname);
const __filename = new URL(import.meta.url).pathname;
console.table({__dirname, __filename});

// generate JSdoc for it
const template = await fs.readFile(path.join(__dirname, 'template.html'), 'utf-8');

console.log(template)
