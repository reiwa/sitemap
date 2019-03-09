import { JSDOM } from 'jsdom'

interface Url {
  loc: string
  lastmod?: string
}

const doctype = '<?xml version="1.0" encoding="UTF-8"?>'
const html = `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"></urlset>`

export const createSitemap = (urls: Url[]) => {
  const { window } = new JSDOM(html, { contentType: 'application/xml' })

  urls.forEach(url => {
    const urlElement = createUrlElement(url)
    window.document.documentElement.appendChild(urlElement)
  })

  return `${doctype}${window.document.documentElement.outerHTML}`
}

const createUrlElement = (url: Url) => {
  const { window } = new JSDOM()
  const urlElement = window.document.createElement('url')
  urlElement.appendChild(createElement('loc', url.loc))
  if (url.lastmod) {
    urlElement.appendChild(createElement('lastmod', url.lastmod))
  }
  return urlElement
}

const createElement = (tagName: string, text: string) => {
  const { window } = new JSDOM()
  const locElement = window.document.createElement(tagName)
  locElement.innerHTML = text
  return locElement
}
