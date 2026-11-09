// Run: node scripts/test-cms-media-size.mjs
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import vm from 'node:vm';

let source = await readFile(new URL('../defaults/core/cms/cms.js', import.meta.url), 'utf8');
source = source.replace(/\}\)\(\);\s*$/, '  window.mediaSize = mediaSize;\n})();');
const window = {};
vm.runInNewContext(source, {
    window,
    document: { readyState: 'loading', addEventListener() {} },
});
const { mediaSize } = window;
const out = (s) => [s.width, s.height];

// Without crop: fit inside width x height and keep the aspect ratio.
assert.deepEqual(out(mediaSize(1200, 1200, { width: 500, height: 300 })), [300, 300], 'a square stays square');
assert.deepEqual(out(mediaSize(1600, 900, { width: 500, height: 300 })), [500, 281], 'a wide image fits the width');
assert.deepEqual(out(mediaSize(900, 1600, { width: 500, height: 300 })), [169, 300], 'a tall image fits the height');
assert.deepEqual(out(mediaSize(2000, 1000, { width: 800 })), [800, 400], 'one dimension scales the other');
assert.deepEqual(out(mediaSize(2000, 1000, { height: 250 })), [500, 250], 'height alone works too');
console.log('PASS without crop, images fit inside the box and keep their aspect ratio');

// Without crop: never enlarge.
assert.deepEqual(out(mediaSize(300, 200, { width: 500, height: 300 })), [300, 200], 'smaller images are left at their size');
assert.deepEqual(out(mediaSize(300, 200, { width: 500 })), [300, 200]);
assert.deepEqual(out(mediaSize(300, 200, { convert: 'webp' })), [300, 200], 'convert only keeps the size');
console.log('PASS without crop, smaller images are not enlarged');

// With crop: unchanged, covers width x height and cuts from the centre.
const c = mediaSize(1200, 1200, { width: 500, height: 300, crop: true });
assert.deepEqual(out(c), [500, 300]);
assert.deepEqual([c.sx, c.sy, c.sw, c.sh], [0, 240, 1200, 720]);
assert.deepEqual(out(mediaSize(2000, 1000, { width: 800, crop: true })), [800, 400]);
console.log('PASS with crop, the output is exactly width x height, cut from the centre');
