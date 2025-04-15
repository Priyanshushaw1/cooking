import type React from "react"
import { Inter } from "next/font/google"
import Link from "next/link"
import Image from "next/image"
import { Search, Menu, X, User, ShoppingBag } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ThemeProvider } from "@/components/theme-provider"

import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "CookEasy - Jo banana nahi aata, yahan se seekho!",
  description: "Learn to cook delicious Indian recipes with easy-to-follow tutorials and videos.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="flex flex-col min-h-screen">
            <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
              <div className="container flex h-16 items-center">
                <Sheet>
                  <SheetTrigger asChild>
                    <Button variant="outline" size="icon" className="md:hidden">
                      <Menu className="h-5 w-5" />
                      <span className="sr-only">Toggle menu</span>
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="left" className="pr-0">
                    <MobileNav />
                  </SheetContent>
                </Sheet>
                <Link href="/" className="flex items-center gap-2 ml-4 md:ml-0">
                  <Image
                    src="/placeholder.svg?height=32&width=32"
                    alt="CookEasy Logo"
                    width={32}
                    height={32}
                    className="rounded"
                  />
                  <span className="font-bold text-xl text-orange-800">CookEasy</span>
                </Link>
                <nav className="hidden md:flex gap-6 ml-10">
                  <Link href="/" className="text-sm font-medium hover:text-orange-600 transition-colors">
                    Home
                  </Link>
                  <Link href="/recipes" className="text-sm font-medium hover:text-orange-600 transition-colors">
                    Recipes
                  </Link>
                  <Link href="/tutorials" className="text-sm font-medium hover:text-orange-600 transition-colors">
                    Tutorials
                  </Link>
                  <Link href="/about" className="text-sm font-medium hover:text-orange-600 transition-colors">
                    About
                  </Link>
                </nav>
                <div className="flex items-center ml-auto gap-2">
                  <form className="hidden md:flex items-center relative">
                    <Search className="absolute left-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      type="search"
                      placeholder="Search..."
                      className="w-[200px] lg:w-[300px] pl-8 bg-background"
                    />
                  </form>
                  <Button variant="ghost" size="icon" className="text-orange-800">
                    <User className="h-5 w-5" />
                    <span className="sr-only">Account</span>
                  </Button>
                  <Button variant="ghost" size="icon" className="text-orange-800">
                    <ShoppingBag className="h-5 w-5" />
                    <span className="sr-only">Cart</span>
                  </Button>
                </div>
              </div>
            </header>
            <main className="flex-1">{children}</main>
            <footer className="border-t bg-orange-50">
              <div className="container px-4 py-8 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                  <div className="md:col-span-1">
                    <Link href="/" className="flex items-center gap-2 mb-4">
                      <Image
                        src="/placeholder.svg?height=40&width=40"
                        alt="CookEasy Logo"
                        width={40}
                        height={40}
                        className="rounded"
                      />
                      <span className="font-bold text-xl text-orange-800">CookEasy</span>
                    </Link>
                    <p className="text-sm text-gray-600 mb-4">Jo banana nahi aata, yahan se seekho!</p>
                    <div className="flex space-x-4">
                      <Link href="#" className="text-orange-600 hover:text-orange-700">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                        </svg>
                      </Link>
                      <Link href="#" className="text-orange-600 hover:text-orange-700">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                        </svg>
                      </Link>
                      <Link href="#" className="text-orange-600 hover:text-orange-700">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                        </svg>
                      </Link>
                      <Link href="#" className="text-orange-600 hover:text-orange-700">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                          <rect width="4" height="12" x="2" y="9"></rect>
                          <circle cx="4" cy="4" r="2"></circle>
                        </svg>
                      </Link>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-medium text-orange-800 mb-3">Quick Links</h3>
                    <ul className="space-y-2 text-sm">
                      <li>
                        <Link href="/" className="text-gray-600 hover:text-orange-600">
                          Home
                        </Link>
                      </li>
                      <li>
                        <Link href="/recipes" className="text-gray-600 hover:text-orange-600">
                          Recipes
                        </Link>
                      </li>
                      <li>
                        <Link href="/tutorials" className="text-gray-600 hover:text-orange-600">
                          Tutorials
                        </Link>
                      </li>
                      <li>
                        <Link href="/about" className="text-gray-600 hover:text-orange-600">
                          About Us
                        </Link>
                      </li>
                      <li>
                        <Link href="/contact" className="text-gray-600 hover:text-orange-600">
                          Contact
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-medium text-orange-800 mb-3">Categories</h3>
                    <ul className="space-y-2 text-sm">
                      <li>
                        <Link href="/category/breakfast" className="text-gray-600 hover:text-orange-600">
                          Breakfast
                        </Link>
                      </li>
                      <li>
                        <Link href="/category/main-course" className="text-gray-600 hover:text-orange-600">
                          Main Course
                        </Link>
                      </li>
                      <li>
                        <Link href="/category/desserts" className="text-gray-600 hover:text-orange-600">
                          Desserts
                        </Link>
                      </li>
                      <li>
                        <Link href="/category/snacks" className="text-gray-600 hover:text-orange-600">
                          Snacks
                        </Link>
                      </li>
                      <li>
                        <Link href="/category/beverages" className="text-gray-600 hover:text-orange-600">
                          Beverages
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-medium text-orange-800 mb-3">Subscribe</h3>
                    <p className="text-sm text-gray-600 mb-4">
                      Subscribe to our newsletter for weekly recipes and cooking tips.
                    </p>
                    <form className="space-y-2">
                      <Input
                        type="email"
                        placeholder="Your email"
                        className="bg-white border-orange-200 focus-visible:ring-orange-400"
                      />
                      <Button type="submit" className="w-full bg-orange-600 hover:bg-orange-700">
                        Subscribe
                      </Button>
                    </form>
                  </div>
                </div>
                <div className="border-t border-orange-200 mt-8 pt-8 text-center">
                  <p className="text-sm text-gray-600">
                    &copy; {new Date().getFullYear()} CookEasy. All rights reserved.
                  </p>
                </div>
              </div>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

function MobileNav() {
  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center justify-between border-b px-4 py-3">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/placeholder.svg?height=32&width=32"
            alt="CookEasy Logo"
            width={32}
            height={32}
            className="rounded"
          />
          <span className="font-bold text-xl text-orange-800">CookEasy</span>
        </Link>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon">
            <X className="h-5 w-5" />
            <span className="sr-only">Close menu</span>
          </Button>
        </SheetTrigger>
      </div>
      <nav className="flex-1 overflow-auto py-4">
        <ul className="space-y-2 px-4">
          <li>
            <Link href="/" className="block py-2 text-lg font-medium hover:text-orange-600">
              Home
            </Link>
          </li>
          <li>
            <Link href="/recipes" className="block py-2 text-lg font-medium hover:text-orange-600">
              Recipes
            </Link>
          </li>
          <li>
            <Link href="/tutorials" className="block py-2 text-lg font-medium hover:text-orange-600">
              Tutorials
            </Link>
          </li>
          <li>
            <Link href="/about" className="block py-2 text-lg font-medium hover:text-orange-600">
              About
            </Link>
          </li>
        </ul>
      </nav>
      <div className="border-t px-4 py-4">
        <form className="relative mb-4">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="Search..." className="w-full pl-8 bg-background" />
        </form>
        <div className="flex gap-2">
          <Button className="flex-1 bg-orange-600 hover:bg-orange-700">Sign In</Button>
          <Button variant="outline" className="flex-1">
            Sign Up
          </Button>
        </div>
      </div>
    </div>
  )
}


import './globals.css'