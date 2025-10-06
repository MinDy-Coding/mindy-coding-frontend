import type { Metadata } from "next"
import Header from "@/components/layouts/Header"
import "./globals.css"


export const metadata: Metadata = {
  title: "MinDy Coding",
  description: "QuanhPam",
  icons: {
    icon: "/logos/logo-mindy.png",          
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        
        {children}
      </body>
    </html>
  )
}
