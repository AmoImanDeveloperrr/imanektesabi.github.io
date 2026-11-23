import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
const root = fileURLToPath(new URL('../dist/', import.meta.url));
const pages = ['index.html', 'about/index.html', 'play/index.html', 'work/uniconnect/index.html', 'work/settings-redesign/index.html', 'work/intelligent-activity-log-analyzer/index.html'];
let failures = [];
for (const page of pages) {
  const path = join(root, page);
  if (!existsSync(path)) { failures.push(`Missing page: ${page}`); continue; }
  const html = readFileSync(path, 'utf8');
  for (const m of html.matchAll(/(?:src|href)="(\/(?!\/)[^"?#]+\.(?:js|css|png|webp|svg|woff2))[^" ]*"/g)) {
    if (!existsSync(join(root, m[1]))) failures.push(`${page}: missing ${m[1]}`);
  }
}
const chunks = join(root, '_next/static/chunks');
for (const name of readdirSync(chunks).filter(n => n.endsWith('.js'))) {
  const source = readFileSync(join(chunks, name), 'utf8');
  try { new Function(source); } catch (e) { failures.push(`${name}: ${e.message}`); }
}
if (failures.length) { console.error([...new Set(failures)].join('\n')); process.exit(1); }
console.log(`Verified ${pages.length} portfolio pages, local page assets, and client bundle syntax.`);
