import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Claymorphism Carousel - Modern Slider Template',
  description: 'A beautiful, responsive carousel slider featuring the latest claymorphism design trend. Built with React, TypeScript, and modern CSS for optimal performance and accessibility.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" 
          rel="stylesheet" 
        />
        <meta name="theme-color" content="#667eea" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}