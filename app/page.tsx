import Image from "next/image"
import Link from "next/link"
import { ChevronRight, Play } from "lucide-react"

import { Button } from "@/components/ui/button"
import BookCallWidget from "@/components/book-call-widget"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ProcessSteps from "@/components/process-steps"
import ServiceCards from "@/components/service-cards"
import Testimonials from "@/components/testimonials"
import ClientLogos from "@/components/client-logos"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            AI Development and Implementation for SMBs, Agencies, and Startups
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-muted-foreground">
            Hyssop Labs is a consulting & development agency that helps SMBs, agencies, and startups implement AI to
            generate new revenue, increase profit margins, save significant time, reduce churn, etc. — basically
            whatever you're trying to accomplish.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button size="lg" asChild>
              <Link href="#book-call">
                Book a Call <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="#how-it-works">
                See How It Works <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Hero Video */}
        <div className="mt-12 overflow-hidden rounded-lg border bg-background shadow-xl">
          <div className="relative aspect-video w-full">
            <div className="absolute inset-0 flex items-center justify-center bg-black/5">
              <Button size="lg" variant="outline" className="rounded-full bg-white/90 p-8">
                <Play className="h-12 w-12 text-primary" />
                <span className="sr-only">Play video</span>
              </Button>
            </div>
            <Image
              src="/placeholder.svg?height=720&width=1280"
              alt="Hyssop Labs Demo Video"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <ClientLogos />

      {/* How It Works / Process Section */}
      <section id="how-it-works" className="bg-slate-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">How It Works</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Our streamlined process ensures efficient delivery and exceptional results
            </p>
          </div>
          <ProcessSteps />
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">What We Offer</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Comprehensive AI solutions tailored to your business needs
            </p>
          </div>
          <ServiceCards />
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="bg-slate-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">What Our Clients Say</h2>
            <p className="mt-4 text-lg text-muted-foreground">Real results from businesses just like yours</p>
          </div>
          <Testimonials />
        </div>
      </section>

      {/* Book a Call Section */}
      <section id="book-call" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Schedule a Demo</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Book a call to discuss how we can help implement AI solutions for your business
            </p>
          </div>
          <BookCallWidget />
        </div>
      </section>

      <Footer />
    </div>
  )
}
