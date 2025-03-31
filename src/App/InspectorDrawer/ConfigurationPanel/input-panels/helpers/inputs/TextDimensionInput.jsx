import React from "react"

import { TextField, Typography } from "@mui/material"

export default function TextDimensionInput({ label, defaultValue, onChange }) {
  const handleChange = ev => {
    const value = parseInt(ev.target.value)
    onChange(isNaN(value) ? null : value)
  }
  return (
    <TextField
      fullWidth
      onChange={handleChange}
      defaultValue={defaultValue}
      label={label}
      variant="standard"
      placeholder="auto"
      size="small"
      InputProps={{
        endAdornment: (
          <Typography variant="body2" color="text.secondary">
            px
          </Typography>
        )
      }}
    />
  )
}
