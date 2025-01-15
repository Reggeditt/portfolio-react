import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/ThemeProvider";
import Header from "./components/Header";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: 'Tetteh Kodjo-Sarso - Full-Stack Web Developer',
  description: 'Portfolio of Tetteh Kodjo-Sarso, a Full-Stack Web Developer specializing in JavaScript, React, and Ruby on Rails',
}

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={"bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300"}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
