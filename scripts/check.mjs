import { readFile, access } from 'node:fs/promises';
import assert from 'node:assert/strict';
const root = new URL('../', import.meta.url);
const html = await readFile(new URL('index.html', root), 'utf8');
const css = await readFile(new URL('styles.css', root), 'utf8');
const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map(match => match[1]);
assert.equal(ids.length, new Set(ids).size, 'HTML ids must be unique');
for (const match of html.matchAll(/(?:href|aria-controls|aria-labelledby)="(#?[^"\s]+)"/g)) {
  const target = match[1];
  if (target.startsWith('#')) assert(ids.includes(target.slice(1)), `Missing anchor ${target}`);
  if (match[0].startsWith('aria-')) assert(ids.includes(target), `Missing accessibility target ${target}`);
}
const assets = new Set([...html.matchAll(/(?:src|href|data-photo)="(assets\/[^"#]+)"/g)].map(match => match[1]));
for (const match of css.matchAll(/url\('([^']+)'\)/g)) assets.add(match[1]);
for (const asset of assets) await access(new URL(asset, root));
for (const match of html.matchAll(/<img\b[^>]*>/g)) assert(/\balt="[^"]*"/.test(match[0]), 'Image missing alt text');
assert.equal([...html.matchAll(/<h1\b/g)].length, 1, 'Use one main heading');
assert(html.includes('https://www.instagram.com/esf_basiscedarpark/'), 'Missing chapter Instagram');
assert(html.includes('https://substack.com/@endlesssmilesfoundationbcpk'), 'Missing chapter journal');
assert(html.includes('November 2026 · Date TBA'), 'Fundraiser must keep unconfirmed exact date clear');
assert(html.includes('not BASIS Cedar Park chapter totals'), 'Foundation numbers must be distinguished from chapter totals');
assert(html.includes('Board introductions and photos are coming soon'), 'Unconfirmed leadership must remain clear');
const hosting = JSON.parse(await readFile(new URL('.openai/hosting.json', root), 'utf8'));
assert(hosting.project_id && hosting.static.directory === 'dist', 'Invalid hosting configuration');
console.log(`Passed: ${ids.length} unique IDs, all anchor/accessibility targets, ${assets.size} local assets, image descriptions, chapter links, and content boundaries.`);
