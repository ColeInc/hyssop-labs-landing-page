"use client"

import { useState } from "react"
import { CalendarIcon, ChevronLeft, ChevronRight, Clock } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function BookCallWidget() {
  const [date, setDate] = useState<Date | undefined>(undefined)
  const [currentMonth, setCurrentMonth] = useState<Date>(new Date())

  const handlePrevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1))
  }

  const handleNextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1))
  }

  const timeSlots = ["9:00 AM", "10:00 AM", "11:00 AM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM"]

  return (
    <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">
      <Card>
        <CardContent className="p-6">
          <div className="mb-6 flex items-center gap-2">
            <Clock className="h-5 w-5 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">30 min</span>
          </div>

          <div className="space-y-4">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Your name" />
            </div>

            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="your.email@example.com" />
            </div>

            <div>
              <Label htmlFor="company">Company</Label>
              <Input id="company" placeholder="Your company name" />
            </div>

            <div>
              <Label htmlFor="message">What would you like to discuss?</Label>
              <Textarea
                id="message"
                placeholder="Please add some context so I know what we're chatting about - thanks!"
                rows={4}
              />
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="space-y-6">
        <div className="text-center">
          <h3 className="text-lg font-medium">Select a Date & Time</h3>
        </div>

        <div className="rounded-lg border p-4">
          <div className="mb-4 flex items-center justify-between">
            <Button variant="outline" size="sm" onClick={handlePrevMonth} aria-label="Previous month">
              <ChevronLeft className="h-4 w-4" />
            </Button>

            <h3 className="text-sm font-medium">
              {currentMonth.toLocaleString("default", { month: "long", year: "numeric" })}
            </h3>

            <Button variant="outline" size="sm" onClick={handleNextMonth} aria-label="Next month">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            month={currentMonth}
            onMonthChange={setCurrentMonth}
            className="rounded-md border"
            disabled={(date) => {
              // Disable weekends and past dates
              const day = date.getDay()
              return day === 0 || day === 6 || date < new Date(new Date().setHours(0, 0, 0, 0))
            }}
          />
        </div>

        {date && (
          <div className="rounded-lg border p-4">
            <h3 className="mb-4 text-sm font-medium">Available Times</h3>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
              {timeSlots.map((time, index) => (
                <Button key={index} variant="outline" className="justify-start text-sm">
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {time}
                </Button>
              ))}
            </div>
          </div>
        )}

        <Button className="w-full" size="lg" disabled={!date}>
          Confirm Booking
        </Button>
      </div>
    </div>
  )
}
