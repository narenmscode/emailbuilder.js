import React, { useState } from "react"

import { InputLabel, Stack } from "@mui/material"

import RawSliderInput from "./raw/RawSliderInput"

export default function SliderInput({
  label,
  defaultValue,
  onChange,
  ...props
}) {
  const [value, setValue] = useState(defaultValue)
  return (
    <Stack spacing={1} alignItems="flex-start">
      <InputLabel shrink>{label}</InputLabel>
      <RawSliderInput
        value={value}
        setValue={value => {
          setValue(value)
          onChange(value)
        }}
        {...props}
      />
    </Stack>
  )
}
