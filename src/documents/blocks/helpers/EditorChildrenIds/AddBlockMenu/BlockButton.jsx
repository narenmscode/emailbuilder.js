import React from "react"

import { Box, Button, Typography } from "@mui/material"

const BUTTON_SX = { p: 1.5, display: "flex", flexDirection: "column" }
const ICON_SX = {
  mb: 0.75,
  width: "100%",
  bgcolor: "cadet.200",
  display: "flex",
  justifyContent: "center",
  p: 1,
  border: "1px solid",
  borderColor: "cadet.300"
}

export default function BlockTypeButton({ label, icon, onClick }) {
  return (
    <Button
      sx={BUTTON_SX}
      onClick={ev => {
        ev.stopPropagation()
        onClick()
      }}
    >
      <Box sx={ICON_SX}>{icon}</Box>
      <Typography variant="body2">{label}</Typography>
    </Button>
  )
}
