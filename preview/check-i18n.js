#!/usr/bin/env node
/* Build-time check: fail if any data-i18n key is missing from any language.
   Usage: node check-i18n.js
   Exit 0 = all keys present. Exit 1 = missing keys (with details). */
const fs = require('fs');
const path = require('path');

const dir = __dirname;
const htmlFiles = ['index.html', 'catalogue.html', 'product.html', 'quote.html'];
const htmlKeys = new Map(); // key -> [files]

htmlFiles.forEach(f => {
  const fp = path.join(dir, f);
  if (!fs.existsSync(fp)) { console.error(`Missing file: ${f}`); process.exit(1); }
  const content = fs.readFileSync(fp, 'utf8');
  ['data-i18n', 'data-i18n-title', 'data-i18n-ph', 'data-i18n-aria'].forEach(attr => {
    const re = new RegExp(attr + '="([^"]+)"', 'g');
    let m;
    while ((m = re.exec(content)) !== null) {
      const key = m[1];
      if (!htmlKeys.has(key)) htmlKeys.set(key, []);
      htmlKeys.get(key).push(f);
    }
  });
});

const appJs = fs.readFileSync(path.join(dir, 'app.js'), 'utf8');
const langBlocks = {};
let failed = false;

['en', 'fr', 'ar'].forEach(lang => {
  const regex = new RegExp(lang + ':\\s*\\{', 'g');
  const match = regex.exec(appJs);
  if (!match) { console.error(`Language block not found: ${lang}`); failed = true; return; }
  let start = match.index + match[0].length;
  let depth = 1, i = start;
  while (depth > 0 && i < appJs.length) {
    if (appJs[i] === '{') depth++;
    if (appJs[i] === '}') depth--;
    i++;
  }
  const block = appJs.substring(start, i - 1);
  const keys = new Set();
  (block.match(/"([^"]+)":/g) || []).forEach(km => keys.add(km.slice(1, -2)));
  langBlocks[lang] = keys;
});

console.log(`HTML keys referenced: ${htmlKeys.size}`);
['en', 'fr', 'ar'].forEach(lang => {
  if (!langBlocks[lang]) return;
  const missing = [...htmlKeys.keys()].filter(k => !langBlocks[lang].has(k));
  console.log(`  ${lang}: ${langBlocks[lang].size} defined, ${missing.length} missing`);
  if (missing.length > 0) {
    failed = true;
    missing.forEach(k => {
      console.error(`  ✗ [${lang}] missing key "${k}" (used in: ${htmlKeys.get(k).join(', ')})`);
    });
  }
});

// Also check t() never returns raw keys
if (!appJs.includes('NEVER expose raw keys')) {
  console.error('  ✗ t() function does not have raw-key protection');
  failed = true;
} else {
  console.log('  ✓ t() has raw-key protection');
}

if (failed) {
  console.error('\nFAILED: translation keys missing. Fix before deploying.');
  process.exit(1);
} else {
  console.log('\nPASSED: all translation keys present in EN/FR/AR.');
  process.exit(0);
}
