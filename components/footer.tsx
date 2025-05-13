import Link from "next/link"
import { Facebook, Instagram, Linkedin, Mail, Twitter } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function Footer() {
  return (
    <footer id="contact" className="border-t bg-slate-50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link href="/" className="text-xl font-bold">
              Hyssop Labs
            </Link>
            <p className="mt-4 max-w-md text-sm text-muted-foreground">
              Hyssop Labs is a consulting & development agency that helps SMBs, agencies, and startups implement AI to
              generate new revenue, increase profit margins, and save significant time.
            </p>
            <div className="mt-6 flex space-x-4">
              <Button variant="ghost" size="icon" asChild aria-label="Twitter">
                <Link href="#">
                  <Twitter className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild aria-label="LinkedIn">
                <Link href="#">
                  <Linkedin className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild aria-label="Facebook">
                <Link href="#">
                  <Facebook className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild aria-label="Instagram">
                <Link href="#">
                  <Instagram className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  AI Automation
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  Bespoke App Solutions
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  Consulting
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-4 w-4" />
                <a href="mailto:hello@hyssoplabs.com" className="hover:text-foreground">
                  hello@hyssoplabs.com
                </a>
              </li>
            </ul>
            <div className="mt-6">
              <Button asChild>
                <Link href="#book-call">Book a Call</Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t pt-8 text-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Hyssop Labs. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
