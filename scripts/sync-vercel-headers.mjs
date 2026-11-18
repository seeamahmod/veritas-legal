// Writes vercel.json from security-headers.js so production and preview headers never drift.
// Usage: node scripts/sync-vercel-headers.mjs [--check]
import { readFile, writeFile } from 'node:fs/promises'
import { securityHeaders } from '../security-headers.js'

const toList = (obj) => Object.entries(obj).map(([key, value]) => ({ key, value }))

const config = {
  $schema: 'https://openapi.vercel.sh/vercel.json',
  framework: 'vite',
  trailingSlash: false,
  // Vercel serves real files and /api functions first; other paths fall through to the SPA.
  // Missing /assets/* and /api/* stay real 404s so stale chunks never get HTML cached as JS.
  rewrites: [{ source: '/((?!assets/|api/).*)', destination: '/index.html' }],
  headers: [
    { source: '/(.*)', headers: toList(securityHeaders) },
    {
      source: '/assets/(.*)',
      headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
    },
    {
      source: '/api/(.*)',
      headers: [
        { key: 'Cache-Control', value: 'no-store' },
        { key: 'X-Robots-Tag', value: 'noindex' },
      ],
    },
  ],
}

const next = JSON.stringify(config, null, 2) + '\n'
if (process.argv.includes('--check') && process.env.VERCEL) {
  // Vercel reads (and rewrites) vercel.json before the build runs, so the drift check is a
  // local/CI guard only.
  console.log('Skipping header drift check on Vercel.')
} else if (process.argv.includes('--check')) {
  const current = await readFile('vercel.json', 'utf8').catch(() => '{}')
  // Compare structure, not bytes, so line endings or formatting never break the build.
  let same = false
  try {
    same = JSON.stringify(JSON.parse(current)) === JSON.stringify(config)
  } catch {
    same = false
  }
  if (!same) {
    console.error('vercel.json is out of sync with security-headers.js. Run: npm run sync:headers')
    process.exit(1)
  }
  console.log('vercel.json headers are in sync.')
} else {
  await writeFile('vercel.json', next)
  console.log('vercel.json written.')
}
