"use client"

import { useEffect } from "react"

export default function BookCallWidget() {
  useEffect(() => {
    const script = document.createElement("script")
    script.src = "https://assets.calendly.com/assets/external/widget.js"
    script.async = true
    document.body.appendChild(script)
  }, [])

  return (
    // <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">
    <div className="mx-auto  max-w-6xl gap-8 ">
      {/* <!-- Calendly inline widget begin --> */}
      {/* <div className="calendly-inline-widget" data-url="https://calendly.com/hyssoplabs?hide_gdpr_banner=1" style={{ minWidth: "320px", height: "700px" }}></div> */}
      {/* <div className="calendly-inline-widget" data-url="https://calendly.com/hyssoplabs?hide_gdpr_banner=1" style={{ height: "700px" }}></div>
      <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script> */}
      {/* <!-- Calendly inline widget end --> */}
      {/* <Card>
        <CardContent className="p-6 space-y-4">
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

      {/* Calendly Inline Embed */}
      {/* <div>
        <div
          className="calendly-inline-widget h-[700px] w-full"
          data-url="https://calendly.com/hyssoplabs/30min"
        ></div>
      </div> */}
      <div
        className="calendly-inline-widget h-[700px] w-full"
        data-url="https://calendly.com/hyssoplabs/30min"
      ></div>
    </div>
  )
}
