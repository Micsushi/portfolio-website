const fs = require('node:fs/promises');
const path = require('node:path');
const crypto = require('node:crypto');

async function verifyServedBuild(baseUrl, buildDirectory = 'build') {
  const base = new URL(baseUrl);
  if (!['http:', 'https:'].includes(base.protocol) || base.username || base.password) {
    throw new Error('Use an HTTP(S) URL without embedded credentials.');
  }
  if (base.pathname !== '/' || base.search || base.hash) {
    throw new Error('Use the origin URL ending in / for this root-hosted build.');
  }
  const root = path.resolve(buildDirectory);
  const manifest = JSON.parse(await fs.readFile(path.join(root, 'asset-manifest.json'), 'utf8'));
  const assets = new Set(['index.html', ...Object.values(manifest.files)]);
  const hash = bytes => crypto.createHash('sha256').update(bytes).digest('hex');
  for (const asset of assets) {
    const url = new URL(asset, base);
    if (url.origin !== base.origin) throw new Error('Build manifest references another origin.');
    const relative = decodeURIComponent(url.pathname).replace(/^\/+/, '');
    const file = path.resolve(root, relative);
    if (!file.startsWith(root + path.sep)) throw new Error('Build asset escapes the build directory.');
    const local = await fs.readFile(file);
    const response = await fetch(url, {cache: 'no-store', redirect: 'error', signal: AbortSignal.timeout(15000)});
    if (!response.ok) throw new Error(`Served asset ${relative} returned HTTP ${response.status}.`);
    if (hash(local) !== hash(Buffer.from(await response.arrayBuffer()))) {
      throw new Error(`Served asset ${relative} differs from this build; rebuild, restart or reload the intended instance.`);
    }
  }
  return assets.size;
}

if (require.main === module) {
  const [url, directory] = process.argv.slice(2);
  if (!url) { console.error('Usage: node scripts/verify-served-build.cjs URL [build-directory]'); process.exitCode = 1; }
  else verifyServedBuild(url, directory).then(count => console.log(`Verified ${count} served assets match this build.`)).catch(error => { console.error(error.message); process.exitCode = 1; });
}
module.exports = {verifyServedBuild};
