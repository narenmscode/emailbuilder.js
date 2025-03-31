import React, { useState } from "react"

import {
  AlignHorizontalLeftOutlined,
  AlignHorizontalRightOutlined,
  AlignVerticalBottomOutlined,
  AlignVerticalTopOutlined
} from "@mui/icons-material"
import { InputLabel, Stack } from "@mui/material"

import RawSliderInput from "./raw/RawSliderInput"

export default function PaddingInput({ label, defaultValue, onChange }) {
  const [value, setValue] = useState(() => {
    if (defaultValue) {
      return defaultValue
    }
    return {
      top: 0,
      left: 0,
      bottom: 0,
      right: 0
    }
  })

  function handleChange(internalName, nValue) {
    const v = {
      ...value,
      [internalName]: nValue
    }
    setValue(v)
    onChange(v)
  }

  return (
    <Stack spacing={2} alignItems="flex-start" pb={1}>
      <InputLabel shrink>{label}</InputLabel>

      <RawSliderInput
        iconLabel={<AlignVerticalTopOutlined sx={{ fontSize: 16 }} />}
        value={value.top}
        setValue={num => handleChange("top", num)}
        units="px"
        step={4}
        min={0}
        max={80}
        marks
      />

      <RawSliderInput
        iconLabel={<AlignVerticalBottomOutlined sx={{ fontSize: 16 }} />}
        value={value.bottom}
        setValue={num => handleChange("bottom", num)}
        units="px"
        step={4}
        min={0}
        max={80}
        marks
      />

      <RawSliderInput
        iconLabel={<AlignHorizontalLeftOutlined sx={{ fontSize: 16 }} />}
        value={value.left}
        setValue={num => handleChange("left", num)}
        units="px"
        step={4}
        min={0}
        max={80}
        marks
      />

      <RawSliderInput
        iconLabel={<AlignHorizontalRightOutlined sx={{ fontSize: 16 }} />}
        value={value.right}
        setValue={num => handleChange("right", num)}
        units="px"
        step={4}
        min={0}
        max={80}
        marks
      />
    </Stack>
  )
}
