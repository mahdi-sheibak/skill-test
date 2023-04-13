"use client"

import { Button } from "ui"

function TestSentry() {
  return (
    <div>
      <Button
        label="Button"
        onClick={() => {
          throw new Error("Sentry Frontend Error")
        }}
      />
    </div>
  )
}

export default TestSentry
