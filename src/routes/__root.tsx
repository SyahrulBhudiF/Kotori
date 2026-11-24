import { createRootRoute, HeadContent, Outlet, Scripts } from '@tanstack/react-router'
import { SiteLayout } from '../ui/site-layout'
import '../styles.css'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: 'N5 Japanese study' },
    ],
    links: [{ rel: 'stylesheet', href: '/site.css' }],
  }),
  component: RootDocument,
})

function RootDocument() {
  return (
    <html lang="ja">
      <head><HeadContent /></head>
      <body>
        <SiteLayout><Outlet /></SiteLayout>
        <Scripts />
      </body>
    </html>
  )
}
