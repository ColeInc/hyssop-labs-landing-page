"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold text-primary">Hyssop Labs</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex md:items-center md:space-x-6">
          <Link
            href="#services"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground !text-gray-900"
          >
            Services
          </Link>
          {/* <Link
            href="#how-it-works"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            How It Works
          </Link> */}
          {/* <Link
            href="#testimonials"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Case Studies
          </Link> */}
          <Link
            href="#contact"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground !text-gray-900"
          >
            Contact
          </Link>
          <Button asChild>
            <Link href="#book-call">Book a Call</Link>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button className="flex items-center md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          <span className="sr-only">Toggle menu</span>
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "absolute left-0 right-0 top-16 z-50 border-b bg-background md:hidden",
          isMenuOpen ? "block" : "hidden",
        )}
      >
        <nav className="container mx-auto flex flex-col space-y-4 px-4 py-6">
          <Link
            href="#services"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            onClick={() => setIsMenuOpen(false)}
          >
            Services
          </Link>
          <Link
            href="#how-it-works"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            onClick={() => setIsMenuOpen(false)}
          >
            How It Works
          </Link>
          <Link
            href="#testimonials"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            onClick={() => setIsMenuOpen(false)}
          >
            Case Studies
          </Link>
          <Link
            href="#contact"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
          <Button asChild className="w-full" onClick={() => setIsMenuOpen(false)}>
            <Link href="#book-call">Book a Call</Link>
          </Button>
        </nav>
      </div>
    </header>
  )
}
