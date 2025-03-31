import React from "react"

import { Box, Menu } from "@mui/material"

import BlockButton from "./BlockButton"
import { BUTTONS } from "./buttons"

export default function BlocksMenu({ anchorEl, setAnchorEl, onSelect }) {
  const onClose = () => {
    setAnchorEl(null)
  }

  const onClick = block => {
    onSelect(block)
    setAnchorEl(null)
  }

  if (anchorEl === null) {
    return null
  }

  return (
    <Menu
      open
      anchorEl={anchorEl}
      onClose={onClose}
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      transformOrigin={{ vertical: "top", horizontal: "center" }}
    >
      <Box
        sx={{ p: 1, display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr" }}
      >
        {BUTTONS.map((k, i) => (
          <BlockButton
            key={i}
            label={k.label}
            icon={k.icon}
            onClick={() => onClick(k.block())}
          />
        ))}
      </Box>
    </Menu>
  )
}
