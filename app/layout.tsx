import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Alas de Barro',
  description: 'Cerámica artesanal para tu hogar',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Italianno&family=Josefin+Sans:ital,wght@0,300;1,300&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  )
}