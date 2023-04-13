import { Analytics } from "@vercel/analytics/react"

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
      <Analytics />
    </html>
  )
}

export default RootLayout
