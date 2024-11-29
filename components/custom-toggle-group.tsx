import * as React from "react"
import { Button } from "@/components/ui/button"

export interface ToggleGroupProps {
  options: string[]
  value: string[]
  onChange: (value: string[]) => void
}

export function CustomToggleGroup({ options, value, onChange }: ToggleGroupProps) {
  const handleToggle = (option: string) => {
    if (value.includes(option)) {
      onChange(value.filter((item) => item !== option))
    } else {
      onChange([...value, option])
    }
  }

  return (
    <div className="flex flex-wrap gap-2">
      {options.map((option) => (
        <Button
          key={option}
          variant={value.includes(option) ? "default" : "outline"}
          size="sm"
          onClick={() => handleToggle(option)}
          className="rounded-full"
        >
          {option}
        </Button>
      ))}
    </div>
  )
}

