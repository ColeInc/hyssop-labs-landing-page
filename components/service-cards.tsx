import Link from "next/link"
import { ArrowRight, Bot, Code } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function ServiceCards() {
  const services = [
    {
      icon: Code,
      title: "Bespoke App Solutions",
      description: "Custom software built for your specific needs without unnecessary features or costs.",
      points: [
        "Get exactly what your business needs without paying for bloated features you'll never use",
        "Stop forcing your unique processes into rigid off-the-shelf software that wasn't built for you",
        "From lean MVPs to full-featured systems, we create custom apps tailored to your goals and your budget."
      ],
    },
    {
      icon: Bot,
      title: "AI Automation",
      description: "Eliminate repetitive tasks, uncover insights, and create personalized experiences.",
      points: [
        "Eliminate repetitive, low-value tasks that drain time and morale so your team can focus on work that actually moves your business forward.",
        "Purpose built automations for your unique business processes. Automating anything from automating lead generation processes to tedious document processing."
      ],
    },
  ]

  return (
    <div className="rounded-2xl border bg-white p-8 shadow-sm">
      <div className="grid gap-12 md:grid-cols-2 md:gap-8">
        {services.map((service, index) => (
          <div key={index} className="space-y-6">
            {/* Icon */}
            <div className="h-16 w-16 rounded-lg bg-primary/10 p-4">
              <service.icon className="h-8 w-8 text-primary" />
            </div>

            {/* Title */}
            <h3 className="text-2xl font-bold">{service.title}</h3>

            {/* Short description */}
            <p className="text-lg text-slate-600 leading-tight">{service.description}</p>

            {/* Bullet points */}
            <ul className="space-y-3 pt-2">
              {service.points.map((point, pointIndex) => (
                <li key={pointIndex} className="flex items-start gap-3 leading-tight">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary "></span>
                  <span className="text-slate-700">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <div className="mt-10 flex justify-end">
        <Button asChild className="group">
          <Link href="#book-call">
            Schedule a Call
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
      </div>
    </div>
  )
}
