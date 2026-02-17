import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

test('index.html has header and script entrypoint', async () => {
  const html = await readFile(new URL('../index.html', import.meta.url), 'utf8');

  assert.match(html, /<header class="header">/);
  assert.match(html, /<script src="\.\/scripts\/main\.js" type="module" defer><\/script>/);
});
