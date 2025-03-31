import React, { useState } from "react"

import {
  FormatAlignCenterOutlined,
  FormatAlignLeftOutlined,
  FormatAlignRightOutlined
} from "@mui/icons-material"
import { ToggleButton } from "@mui/material"

import RadioGroupInput from "./RadioGroupInput"

export default function TextAlignInput({ label, defaultValue, onChange }) {
  const [value, setValue] = useState(defaultValue ?? "left")

  return (
    <RadioGroupInput
      label={label}
      defaultValue={value}
      onChange={value => {
        setValue(value)
        onChange(value)
      }}
    >
      <ToggleButton value="left">
        <FormatAlignLeftOutlined fontSize="small" />
      </ToggleButton>
      <ToggleButton value="center">
        <FormatAlignCenterOutlined fontSize="small" />
      </ToggleButton>
      <ToggleButton value="right">
        <FormatAlignRightOutlined fontSize="small" />
      </ToggleButton>
    </RadioGroupInput>
  )
}
