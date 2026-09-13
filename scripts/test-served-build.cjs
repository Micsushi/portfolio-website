const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs/promises');
const os = require('node:os');
const path = require('node:path');
const http = require('node:http');
const {verifyServedBuild} = require('./verify-served-build.cjs');

test('served identity succeeds for this build and rejects stale assets', async () => {
  const root = await fs.mkdtemp(path.join(os.tmpdir(), 'portfolio-build-proof-'));
  let stale = false;
  const server = http.createServer((request, response) => {
    response.end(request.url === '/index.html' ? '<html>synthetic</html>' : stale ? 'old bundle' : 'current bundle');
  });
  try {
    await fs.writeFile(path.join(root, 'index.html'), '<html>synthetic</html>');
    await fs.writeFile(path.join(root, 'main.js'), 'current bundle');
    await fs.writeFile(path.join(root, 'asset-manifest.json'), JSON.stringify({files:{main:'main.js'}}));
    await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
    const url = `http://127.0.0.1:${server.address().port}/`;
    assert.equal(await verifyServedBuild(url, root), 2);
    stale = true;
    await assert.rejects(verifyServedBuild(url, root), /main.js differs/);
  } finally {
    await new Promise(resolve => server.close(resolve));
    assert.equal(path.dirname(path.resolve(root)), path.resolve(os.tmpdir()));
    assert.ok(path.basename(root).startsWith('portfolio-build-proof-'));
    await fs.rm(root, {recursive:true, force:true});
  }
});
