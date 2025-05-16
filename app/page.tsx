
import BookCallWidget from "@/components/book-call-widget"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ProcessSteps from "@/components/process-steps"
import ServiceCards from "@/components/service-cards"
import WistiaVideo from "@/components/wistia-video"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24 max-w-6xl">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            AI Development and Automation for SMBs, Agencies, and Startups
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-muted-foreground text-gray-700">
            Hyssop Labs helps SMBs, agencies, and startups generate new revenue, automate tedious processes, and save significant time with Automation and AI.
          </p>
          {/* <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button size="lg" asChild>
              <Link href="#book-call">
                Book a Call<ChevronRight className="h-4 w-4" />
              </Link>
            </Button>
          </div> */}
        </div>

        {/* Hero Video */}
        <div className="mt-12 overflow-hidden rounded-lg border bg-background shadow-xl max-w-6xl">
          <div className="relative aspect-video w-full">
            <WistiaVideo mediaId="nctc8kgyzy" aspect="1.7777777777777777" />
          </div>
        </div>
      </section>

      {/* How It Works / Process Section */}
      <section id="how-it-works" className="bg-slate-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">How It Works</h2>
            <p className="mt-4 text-sm text-gray-800 text-muted-foreground">
              A simple, streamlined process to provide your business with exactly what you need, and nothing extra.
            </p>
          </div>
          <ProcessSteps />
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 md:py-24 mx-auto max-w-6xl">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">What We Offer</h2>
            <p className="mt-4 text-sm text-gray-800 text-muted-foreground">
              Tailored solutions for businesses who want results without excessive features or costs.
            </p>
          </div>
          <ServiceCards />
        </div>
      </section>

      {/* Book a Call Section */}
      <section id="book-call" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-0 text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Schedule a Demo</h2>
            <p className="mt-4 text-lg text-muted-foreground text-gray-800">
              Book a call to discuss how we can help implement AI solutions for your business.
            </p>
            <p className="pt-3 font-bold max-w-[450px] mx-auto text-[#6c48fb]">When booking your call, please provide as much context and detail as possible!</p>
          </div>
          <BookCallWidget />
        </div>
      </section>

      <Footer />
    </div>
  )
}
