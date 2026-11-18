// Converts design PNG exports in src/assets/home to WebP (one-off build helper).
import sharp from 'sharp';
import { readdir, unlink } from 'node:fs/promises';
import { join } from 'node:path';
const dir = 'src/assets/home';
const maxW = { hero: 2000, firm: 1400, 'logo-': 400, 'avatar-': 96, 'footer-avatar-': 120 };
for (const f of await readdir(dir)) {
  if (!f.endsWith('.png')) continue;
  const key = Object.keys(maxW).find((k) => f.startsWith(k));
  const width = key ? maxW[key] : 1400;
  await sharp(join(dir, f)).resize({ width, withoutEnlargement: true }).webp({ quality: 80 }).toFile(join(dir, f.replace('.png', '.webp')));
  await unlink(join(dir, f));
}
console.log('done');
