import { createSitemap } from '..'

test('basic', () => {
  const data = createSitemap([{ loc: `https://www.google.co.jp`, lastmod: '' }])
  const expected = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url xmlns="http://www.w3.org/1999/xhtml"><loc>https://www.google.co.jp</loc><lastmod></lastmod></url></urlset>`
  expect(data).toBe(expected)
})
