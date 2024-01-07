import './globals.css'

export const metadata = {
  title: 'Shopping App',
  description: 'A Shopping App',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >{children}</body>
    </html>
  )
}
