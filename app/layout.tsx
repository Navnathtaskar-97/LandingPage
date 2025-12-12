import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Navnath Taskar - Front-End Developer",
  description:
    "Front-End Developer specializing in React.js, JavaScript, and modern web technologies. Building scalable and responsive web applications.",
  keywords: "React Developer, Front-End Developer, JavaScript, Tailwind CSS, Web Development, Navnath Taskar",
  authors: [{ name: "Navnath Taskar" }],
  creator: "Navnath Taskar",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://neeta-chillore.vercel.app",
    title: "Navnath Taskar - Front-End Developer",
    description: "Front-End Developer specializing in React.js, JavaScript, and modern web technologies.",
    siteName: "Navnath Taskar Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Navnath Taskar - Front-End Developer",
    description: "Front-End Developer specializing in React.js, JavaScript, and modern web technologies.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
