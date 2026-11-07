import { mkdir, cp, rm, readFile } from 'node:fs/promises';
const root = new URL('../', import.meta.url);
const dist = new URL('dist/', root);
await rm(dist, { recursive: true, force: true });
await mkdir(dist, { recursive: true });
for (const file of ['index.html', 'styles.css', 'app.js', 'assets']) {
  await cp(new URL(file, root), new URL(file, dist), { recursive: true });
}
const hosting = JSON.parse(await readFile(new URL('.openai/hosting.json', root), 'utf8'));
if (hosting.static.directory !== 'dist') throw new Error('Static directory must be dist.');
console.log('Built dependency-free static website in dist/.');
