import { CalendarDays, FileText, Rocket, Search } from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function ProcessSteps() {
  const steps = [
    {
      icon: Search,
      title: "Discovery",
      description:
        "A 30-minute discovery call to identify exactly what your pain points are, and how we can help use AI and automations to solve them. We engage in a comprehensive discussion to understand your project goals, user needs, and unique requirements.",
    },
    {
      icon: FileText,
      title: "Proposal / Scope / Plan",
      description:
        "Taking what we've learned in the discovery call, we'll form a comprehensive plan on the best solution we can offer you. We'll come to an agreement on a well-defined scope for the project and create a detailed specification document that will guide our development.",
    },
    {
      icon: CalendarDays,
      title: "Build",
      description:
        "We design and build your app with only the features you need, focusing on simplicity and getting things done. Our skilled development team kicks off the rapid and efficient development process following best practices.",
    },
    {
      icon: Rocket,
      title: "Deliver / Launch",
      description:
        "We deploy your product and provide training so that you have full confidence in running it on your own. Timeliness is key. We pride ourselves on on-time delivery, ensuring your fully functional outcome is ready to go.",
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
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground">
                {index + 1}
              </span>
              {step.title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-sm text-foreground/80">{step.description}</CardDescription>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
