# Security

## Reporting a vulnerability

Please open a private [security advisory](../../security/advisories/new) on this repository rather than a public issue.

## What this project does to stay secure

| Layer | Measure |
| --- | --- |
| **Transport** | HSTS (2 years, `includeSubDomains`, `preload`) and `upgrade-insecure-requests`. |
| **Content Security Policy** | `default-src 'self'`, no inline or `eval` scripts, no inline styles, no third-party origins, `object-src 'none'`, `base-uri 'self'`, `form-action 'self'`, `frame-ancestors 'none'`. Fonts and images are self-hosted so the policy needs no exceptions. |
| **Isolation** | `Cross-Origin-Opener-Policy: same-origin`, `Cross-Origin-Embedder-Policy: require-corp`, `Cross-Origin-Resource-Policy: same-origin`, `Origin-Agent-Cluster`. |
| **Clickjacking / sniffing** | `X-Frame-Options: DENY`, `X-Content-Type-Options: nosniff`. |
| **Privacy** | `Referrer-Policy: strict-origin-when-cross-origin`, a restrictive `Permissions-Policy` (camera, mic, geolocation, payment, etc. disabled), no analytics or trackers, no cookies. |
| **Rendering** | React escapes all output; the codebase uses no `dangerouslySetInnerHTML`. URL params (e.g. `?plan=`) are matched against an allow-list, never rendered raw. |
| **Forms** | Client and server validation with length limits, a honeypot field and a minimum fill time. `fetch` uses `credentials: 'omit'` and `redirect: 'error'`. |
| **API (`/api/contact`)** | POST-only, JSON-only, 8 KB body cap, same-origin `Origin` check, per-IP rate limit, control-character stripping, strict regex validation, generic error messages, `Cache-Control: no-store`, `X-Robots-Tag: noindex`. It never logs or echoes personal data. |
| **Supply chain** | Minimal dependencies, `npm audit --omit=dev` is clean, lockfile committed, no source maps in production. |
| **External links** | `rel="noopener noreferrer nofollow"` on every `target="_blank"` link. |

Headers are defined once in [`security-headers.js`](security-headers.js). `vercel.json` is generated from it (`npm run sync:headers`) and the build fails if the two drift (`npm run check:headers`).
