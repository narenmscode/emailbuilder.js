import React, { useState } from "react"

import { InputLabel, Stack, ToggleButtonGroup } from "@mui/material"

export default function RadioGroupInput({
  label,
  children,
  defaultValue,
  onChange
}) {
  const [value, setValue] = useState(defaultValue)
  return (
    <Stack alignItems="flex-start">
      <InputLabel shrink>{label}</InputLabel>
      <ToggleButtonGroup
        exclusive
        fullWidth
        value={value}
        size="small"
        onChange={(_, v) => {
          if (typeof v !== "string") {
            throw new Error("RadioGroupInput can only receive string values")
          }
          setValue(v)
          onChange(v)
        }}
      >
        {children}
      </ToggleButtonGroup>
    </Stack>
  )
}
