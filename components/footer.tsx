import { Mail, Twitter, Linkedin } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"

export default function Footer() {
  const TWITTER_URL = 'https://twitter.com/cole_mccon'
  const GITHUB_URL = 'https://github.com/coleinc'
  // const LINKEDIN_URL = 'https://www.linkedin.com/in/cole-mcconnell/'
  const LINKEDIN_URL = 'https://www.linkedin.com/company/hyssop-labs'
  const EMAIL_URL = 'mailto:hello@hyssoplabs.com'

  return (
    <footer id="contact" className="border-t bg-slate-50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link href="/" className="text-xl font-bold">
              Hyssop Labs
            </Link>
            <p className="mt-4 max-w-md text-sm text-muted-foreground !text-gray-600">
              Hyssop Labs is a development agency that helps SMBs, agencies, and startups implement AI to
              generate new revenue, increase profit margins, and save you significant time.
            </p>
            <div className="mt-6 flex space-x-4">
              <div className="space-y-4">
                {/* <h3 className="text-lg font-semibold">Connect with me</h3> */}
                <div className="flex gap-2">
                  <Link href={TWITTER_URL} target="_blank">
                    <Button
                      variant="outline"
                      size="icon"
                      className="bg-transparent hover:bg-zinc-300 border-gray-500 transition-colors"
                    >
                      <Twitter className="w-4 h-4 text-zinc-900 hover:text-white transition-colors" />
                    </Button>
                  </Link>
                  <Link href={LINKEDIN_URL} target="_blank">
                    <Button
                      variant="outline"
                      size="icon"
                      className="bg-transparent hover:bg-zinc-300 border-gray-500 transition-colors"
                    >
                      <Linkedin className="w-4 h-4 text-zinc-900 hover:text-white transition-colors" />
                    </Button>
                  </Link>
                  {/* <Link href={GITHUB_URL} target="_blank">
                    <Button
                      variant="outline"
                      size="icon"
                      className="bg-transparent hover:bg-zinc-300 border-gray-500 transition-colors"
                    >
                      <Github className="w-4 h-4 text-zinc-900 hover:text-white transition-colors" />
                    </Button>
                  </Link> */}
                  <Link href={EMAIL_URL}>
                    <Button
                      variant="outline"
                      size="icon"
                      className="bg-transparent hover:bg-zinc-300 border-gray-500 transition-colors"
                    >
                      <Mail className="w-4 h-4 text-zinc-900 hover:text-white transition-colors" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div>
            {/* <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">Services</h3>
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
            </ul> */}
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-4 w-4" />
                <a href="mailto:hello@hyssoplabs.com" className="hover:text-foreground text-gray-600">
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
          <p className="text-xs text-muted-foreground text-gray-600">
            © {new Date().getFullYear()} Hyssop Labs. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
