import React from "react"

import { Box, Button } from "@mui/material"

const TILE_BUTTON = {
  width: 24,
  height: 24
}
export default function Swatch({ paletteColors, value, onChange }) {
  const renderButton = colorValue => {
    return (
      <Button
        key={colorValue}
        onClick={() => onChange(colorValue)}
        sx={{
          ...TILE_BUTTON,
          backgroundColor: colorValue,
          border: "1px solid",
          borderColor: value === colorValue ? "black" : "grey.200",
          minWidth: 24,
          display: "inline-flex",
          "&:hover": {
            backgroundColor: colorValue,
            borderColor: "grey.500"
          }
        }}
      />
    )
  }
  return (
    <Box
      width="100%"
      sx={{
        display: "grid",
        gap: 1,
        gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr"
      }}
    >
      {paletteColors.map(c => renderButton(c))}
    </Box>
  )
}
