import React, { useState } from "react"

import { TextFieldsOutlined } from "@mui/icons-material"
import { InputLabel, Stack } from "@mui/material"

import RawSliderInput from "./raw/RawSliderInput"

export default function FontSizeInput({ label, defaultValue, onChange }) {
  const [value, setValue] = useState(defaultValue)
  const handleChange = value => {
    setValue(value)
    onChange(value)
  }
  return (
    <Stack spacing={1} alignItems="flex-start">
      <InputLabel shrink>{label}</InputLabel>
      <RawSliderInput
        iconLabel={<TextFieldsOutlined sx={{ fontSize: 16 }} />}
        value={value}
        setValue={handleChange}
        units="px"
        step={1}
        min={10}
        max={48}
      />
    </Stack>
  )
}
