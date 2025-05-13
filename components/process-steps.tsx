import { CalendarDays, FileText, Rocket, Search } from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function ProcessSteps() {
  const steps = [
    {
      icon: Search,
      title: "Discovery",
      description:
        "A 30-minute discovery call to learn about your specific needs and pain points to understand exactly what you need to get done.",
    },
    {
      icon: FileText,
      title: "Proposal",
      description:
        "Based on insights from the discovery call, we'll define a clear project scope and craft a detailed specification to guide development toward the best possible solution.",

    },
    {
      icon: CalendarDays,
      title: "Build",
      description:
        "We design and build your app with just the essential features, focusing on simplicity and speed, while our expert team follows best practices to deliver rapid, efficient development.",
    },
    {
      icon: Rocket,
      title: "Deliver / Launch",
      description:
        "We deliver your product on time, provide hands-on training, and ensure you're fully equipped to run it with confidence from day one.",


    },
  ]

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      {steps.map((step, index) => (
        <Card key={index} className="h-full border-2 transition-all hover:border-primary/50 hover:shadow-md">
          <CardHeader>
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-md bg-primary/10">
              <step.icon className="h-6 w-6 text-primary" />
            </div>
            <CardTitle className="flex items-center gap-2">
              {/* <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground">
                {index + 1}
              </span> */}
              {step.title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-sm text-foreground/80 text-gray-600">{step.description}</CardDescription>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
