import React, { useState } from "react"

import { ToggleButton } from "@mui/material"

import RadioGroupInput from "./RadioGroupInput"

export default function FontWeightInput({ label, defaultValue, onChange }) {
  const [value, setValue] = useState(defaultValue)
  return (
    <RadioGroupInput
      label={label}
      defaultValue={value}
      onChange={fontWeight => {
        setValue(fontWeight)
        onChange(fontWeight)
      }}
    >
      <ToggleButton value="normal">Regular</ToggleButton>
      <ToggleButton value="bold">Bold</ToggleButton>
    </RadioGroupInput>
  )
}
