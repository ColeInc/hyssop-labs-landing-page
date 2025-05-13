import Image from "next/image"

export default function ClientLogos() {
  const clients = [
    { name: "Company 1", logo: "/placeholder.svg?height=40&width=120" },
    { name: "Company 2", logo: "/placeholder.svg?height=40&width=120" },
    { name: "Company 3", logo: "/placeholder.svg?height=40&width=120" },
    { name: "Company 4", logo: "/placeholder.svg?height=40&width=120" },
    { name: "Company 5", logo: "/placeholder.svg?height=40&width=120" },
  ]

  return (
    <section className="border-y bg-slate-50 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {clients.map((client, index) => (
            <div key={index} className="flex items-center justify-center">
              <Image
                src={client.logo || "/placeholder.svg"}
                alt={client.name}
                width={120}
                height={40}
                className="h-8 w-auto grayscale transition-all duration-200 hover:grayscale-0 md:h-10"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
