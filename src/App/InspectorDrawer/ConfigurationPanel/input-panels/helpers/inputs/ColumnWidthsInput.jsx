import React, { useState } from "react"

import { Stack } from "@mui/material"

import TextDimensionInput from "./TextDimensionInput"

export const DEFAULT_2_COLUMNS = [6]
export const DEFAULT_3_COLUMNS = [4, 8]

export default function ColumnWidthsInput({ defaultValue, onChange }) {
  const [currentValue, setCurrentValue] = useState(() => {
    if (defaultValue) {
      return defaultValue
    }
    return [null, null, null]
  })

  const setIndexValue = (index, value) => {
    const nValue = [...currentValue]
    nValue[index] = value
    setCurrentValue(nValue)
    onChange(nValue)
  }

  const columnsCountValue = 3
  let column3 = null
  if (columnsCountValue === 3) {
    column3 = (
      <TextDimensionInput
        label="Column 3"
        defaultValue={currentValue?.[2]}
        onChange={v => {
          setIndexValue(2, v)
        }}
      />
    )
  }
  return (
    <Stack direction="row" spacing={1}>
      <TextDimensionInput
        label="Column 1"
        defaultValue={currentValue?.[0]}
        onChange={v => {
          setIndexValue(0, v)
        }}
      />
      <TextDimensionInput
        label="Column 2"
        defaultValue={currentValue?.[1]}
        onChange={v => {
          setIndexValue(1, v)
        }}
      />
      {column3}
    </Stack>
  )
}
