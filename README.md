# Sitemap

This package is for TypeScript.

## Installation

```
$ yarn add @swimmy/sitemap
```

## Usage

```typescript
import { createSitemap } from '@swimmy/sitemap'

const hostname = 'https://example.dev'

const data = createSitemap([
  { loc: `${hostname}/` },
  { loc: `${hostname}/posts` },
  { loc: `${hostname}/posts/a`, lastmod: '2020-01-01' },
  { loc: `${hostname}/posts/b`, lastmod: '2020-01-02' },
  { loc: `${hostname}/posts/c`, lastmod: '2020-01-03' }
])

console.log(data)
```
