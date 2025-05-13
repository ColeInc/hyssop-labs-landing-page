"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "Hyssop Labs transformed our business with AI automation. We've seen a 40% increase in productivity and significant cost savings.",
      author: "Sarah Johnson",
      position: "CEO, TechStart Inc.",
      company: "TechStart Inc.",
      avatar: "/placeholder.svg?height=80&width=80",
    },
    {
      quote:
        "The team at Hyssop Labs delivered a custom app solution that perfectly addressed our unique business challenges. Highly recommended!",
      author: "Michael Chen",
      position: "CTO, GrowthMetrics",
      company: "GrowthMetrics",
      avatar: "/placeholder.svg?height=80&width=80",
    },
    {
      quote:
        "Their AI consulting services helped us identify opportunities we hadn't considered. Six months later, we've implemented solutions that have increased our revenue by 25%.",
      author: "Jessica Williams",
      position: "Operations Director, Innovate Agency",
      company: "Innovate Agency",
      avatar: "/placeholder.svg?height=80&width=80",
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <div className="relative mx-auto max-w-4xl">
      <Card className="border-none bg-white shadow-lg">
        <CardContent className="p-8">
          <div className="mb-6 flex justify-center">
            <Quote className="h-12 w-12 rotate-180 text-primary/20" />
          </div>

          <blockquote className="mb-8 text-center text-xl font-medium leading-relaxed text-slate-700">
            "{testimonials[currentIndex].quote}"
          </blockquote>

          <div className="flex flex-col items-center">
            <div className="mb-4 h-16 w-16 overflow-hidden rounded-full">
              <Image
                src={testimonials[currentIndex].avatar || "/placeholder.svg"}
                alt={testimonials[currentIndex].author}
                width={80}
                height={80}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="text-center">
              <p className="font-semibold">{testimonials[currentIndex].author}</p>
              <p className="text-sm text-muted-foreground">{testimonials[currentIndex].position}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="mt-8 flex justify-center gap-4">
        <Button variant="outline" size="icon" onClick={prevTestimonial} aria-label="Previous testimonial">
          <ChevronLeft className="h-4 w-4" />
        </Button>
        {testimonials.map((_, index) => (
          <Button
            key={index}
            variant={index === currentIndex ? "default" : "outline"}
            size="icon"
            className="h-3 w-3 rounded-full p-0"
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
        <Button variant="outline" size="icon" onClick={nextTestimonial} aria-label="Next testimonial">
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}
